import { useEffect, useRef } from 'react'
import './NetworkBackground.css'

interface MeshNode {
  x: number
  y: number
  vx: number
  vy: number
  isHub: boolean
  pulsePhase: number
}

interface Ripple {
  x: number
  y: number
  startTime: number
}

const CONNECT_DISTANCE = 150
const CONNECT_DISTANCE_HUB = 230
const SPEED = 0.16
const HUB_SPEED_FACTOR = 0.35
const DENSITY = 24000 // 每 N px^2 一個節點
const HUB_RATIO = 9 // 每 N 個節點中有 1 個基地台節點

const POINTER_REPEL_RADIUS = 130
const POINTER_REPEL_STRENGTH = 1.6
const POINTER_IDLE_MS = 2200
const UE_CONNECT_RADIUS = 280
const RIPPLE_LIFETIME_MS = 900
const RIPPLE_MAX_RADIUS = 90

const hexagonPath = (ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
  ctx.beginPath()
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2
    const px = cx + r * Math.cos(angle)
    const py = cy + r * Math.sin(angle)
    if (i === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }
  ctx.closePath()
}

/**
 * 全頁固定的即時運算網狀網路背景：
 * 少數「基地台」節點（六角形、較大、持續向外發送脈衝訊號環與淡淡的蜂巢涵蓋範圍）
 * 與大量「終端裝置」節點（較小、緩慢漂移）彼此連線，靠近基地台時涵蓋範圍更大。
 *
 * 滑鼠 / 觸控移動時，游標本身會化身成一台正在搜尋訊號的裝置：
 * 附近節點會被輕輕推開，若游標進入最近基地台的涵蓋範圍，
 * 會畫出一條虛線連線並在游標旁顯示訊號格數（越靠近格數越高），
 * 點擊則會像發送一個封包一樣，從點擊處送出一圈擴散的訊號漣漪。
 */
const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let nodes: MeshNode[] = []
    let animationId = 0
    let ripples: Ripple[] = []

    const pointer = { x: -9999, y: -9999, active: false, lastMove: 0 }

    const isLight = () => document.documentElement.getAttribute('data-theme') === 'light'

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.max(26, Math.min(64, Math.floor((width * height) / DENSITY)))
      nodes = Array.from({ length: count }, (_, i) => {
        const isHub = i % HUB_RATIO === 0
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * SPEED * (isHub ? HUB_SPEED_FACTOR : 1),
          vy: (Math.random() - 0.5) * SPEED * (isHub ? HUB_SPEED_FACTOR : 1),
          isHub,
          pulsePhase: Math.random(),
        }
      })
    }

    const handlePointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.active = true
      pointer.lastMove = performance.now()
    }

    const handlePointerDown = (e: PointerEvent) => {
      ripples.push({ x: e.clientX, y: e.clientY, startTime: performance.now() })
    }

    const drawFrame = () => {
      const now = performance.now()
      if (pointer.active && now - pointer.lastMove > POINTER_IDLE_MS) {
        pointer.active = false
      }

      ctx.clearRect(0, 0, width, height)

      const light = isLight()
      const lineRGB = light ? '70, 96, 165' : '148, 189, 255'
      const hubLineRGB = light ? '120, 80, 190' : '180, 150, 255'
      const nodeColor = light ? '#3f7fe0' : '#8fd3ff'
      const hubColor = light ? '#7c5cd6' : '#c9a8ff'
      const pointerRGB = light ? '46, 130, 200' : '120, 220, 255'

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy

        if (!n.isHub && pointer.active) {
          const dx = n.x - pointer.x
          const dy = n.y - pointer.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < POINTER_REPEL_RADIUS && dist > 0.01) {
            const force = (1 - dist / POINTER_REPEL_RADIUS) * POINTER_REPEL_STRENGTH
            n.x += (dx / dist) * force
            n.y += (dy / dist) * force
          }
        }

        if (n.x <= 0 || n.x >= width) n.vx *= -1
        if (n.y <= 0 || n.y >= height) n.vy *= -1
        n.x = Math.min(Math.max(n.x, 0), width)
        n.y = Math.min(Math.max(n.y, 0), height)
      }

      // 節點連線
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const hubEdge = a.isHub || b.isHub
          const maxDist = hubEdge ? CONNECT_DISTANCE_HUB : CONNECT_DISTANCE
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (hubEdge ? 0.6 : light ? 0.5 : 0.6)
            ctx.strokeStyle = `rgba(${hubEdge ? hubLineRGB : lineRGB}, ${alpha.toFixed(3)})`
            ctx.lineWidth = hubEdge ? 1.2 : 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // 基地台：蜂巢涵蓋範圍（淡）＋ 脈衝訊號環 ＋ 六角節點本體
      let nearestHub: MeshNode | null = null
      let nearestHubDist = Infinity

      for (const n of nodes) {
        if (!n.isHub) continue

        hexagonPath(ctx, n.x, n.y, 64)
        ctx.strokeStyle = `rgba(${hubLineRGB}, ${light ? 0.14 : 0.16})`
        ctx.lineWidth = 1
        ctx.stroke()

        const ringRadius = 6 + n.pulsePhase * 46
        const ringAlpha = (1 - n.pulsePhase) * (light ? 0.4 : 0.5)
        ctx.beginPath()
        ctx.strokeStyle = `rgba(${light ? '124, 92, 214' : '201, 168, 255'}, ${ringAlpha.toFixed(3)})`
        ctx.lineWidth = 1.4
        ctx.arc(n.x, n.y, ringRadius, 0, Math.PI * 2)
        ctx.stroke()

        if (!reduceMotion) {
          n.pulsePhase += 0.0055
          if (n.pulsePhase > 1) n.pulsePhase = 0
        }

        hexagonPath(ctx, n.x, n.y, 5.5)
        ctx.fillStyle = hubColor
        ctx.globalAlpha = 0.95
        ctx.fill()
        ctx.globalAlpha = 1

        if (pointer.active) {
          const dx = n.x - pointer.x
          const dy = n.y - pointer.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < nearestHubDist) {
            nearestHubDist = dist
            nearestHub = n
          }
        }
      }

      // 一般裝置節點
      for (const n of nodes) {
        if (n.isHub) continue
        ctx.beginPath()
        ctx.fillStyle = nodeColor
        ctx.globalAlpha = 0.8
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }

      // 游標＝你的裝置：連上最近的基地台，並顯示訊號格數
      if (pointer.active && nearestHub && nearestHubDist < UE_CONNECT_RADIUS) {
        const hub = nearestHub as MeshNode
        const strength = 1 - nearestHubDist / UE_CONNECT_RADIUS

        ctx.setLineDash([5, 5])
        ctx.strokeStyle = `rgba(${pointerRGB}, ${(0.35 + strength * 0.45).toFixed(3)})`
        ctx.lineWidth = 1.4
        ctx.beginPath()
        ctx.moveTo(pointer.x, pointer.y)
        ctx.lineTo(hub.x, hub.y)
        ctx.stroke()
        ctx.setLineDash([])

        hexagonPath(ctx, pointer.x, pointer.y, 7)
        ctx.strokeStyle = `rgba(${pointerRGB}, 0.9)`
        ctx.lineWidth = 1.6
        ctx.stroke()

        // 訊號強度四格（越靠近基地台，點亮越多格）
        const barCount = 4
        const barWidth = 3
        const barGap = 2
        const baseX = pointer.x + 14
        const baseY = pointer.y - 10
        const litBars = Math.max(1, Math.ceil(strength * barCount))
        for (let b = 0; b < barCount; b++) {
          const barHeight = 4 + b * 3
          const x = baseX + b * (barWidth + barGap)
          const y = baseY - barHeight
          ctx.fillStyle =
            b < litBars
              ? `rgba(${pointerRGB}, 0.95)`
              : `rgba(${pointerRGB}, 0.2)`
          ctx.fillRect(x, y, barWidth, barHeight)
        }
      }

      // 點擊漣漪（送出封包的視覺回饋）
      ripples = ripples.filter(r => now - r.startTime < RIPPLE_LIFETIME_MS)
      for (const r of ripples) {
        const elapsed = now - r.startTime
        const progress = elapsed / RIPPLE_LIFETIME_MS
        ctx.beginPath()
        ctx.strokeStyle = `rgba(${pointerRGB}, ${(1 - progress) * 0.7})`
        ctx.lineWidth = 1.6
        ctx.arc(r.x, r.y, progress * RIPPLE_MAX_RADIUS, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    const loop = () => {
      drawFrame()
      animationId = requestAnimationFrame(loop)
    }

    resize()
    drawFrame()
    if (!reduceMotion) {
      animationId = requestAnimationFrame(loop)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="network-background" aria-hidden="true">
      <canvas ref={canvasRef} className="network-background-canvas" />
      <div className="network-background-glow network-background-glow--one" />
      <div className="network-background-glow network-background-glow--two" />
    </div>
  )
}

export default NetworkBackground
