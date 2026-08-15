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

const CONNECT_DISTANCE = 150
const CONNECT_DISTANCE_HUB = 230
const SPEED = 0.16
const HUB_SPEED_FACTOR = 0.35
const DENSITY = 24000 // 每 N px^2 一個節點
const HUB_RATIO = 9 // 每 N 個節點中有 1 個基地台節點

/**
 * 全頁固定的即時運算網狀網路背景：
 * 少數「基地台」節點（較大、持續向外發送脈衝訊號環）
 * 與大量「終端裝置」節點（較小、緩慢漂移）彼此連線，
 * 距離夠近才連線、連線靠近基地台時涵蓋範圍更大，
 * 整體構成一張持續變化的 5G 基地台 - 裝置涵蓋拓樸圖。
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

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height)

      const light = isLight()
      const lineRGB = light ? '70, 96, 165' : '148, 189, 255'
      const hubLineRGB = light ? '120, 80, 190' : '180, 150, 255'
      const nodeColor = light ? '#3f7fe0' : '#8fd3ff'
      const hubColor = light ? '#7c5cd6' : '#c9a8ff'

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x <= 0 || n.x >= width) n.vx *= -1
        if (n.y <= 0 || n.y >= height) n.vy *= -1
        n.x = Math.min(Math.max(n.x, 0), width)
        n.y = Math.min(Math.max(n.y, 0), height)
      }

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

      for (const n of nodes) {
        if (n.isHub) {
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

          ctx.beginPath()
          ctx.fillStyle = hubColor
          ctx.globalAlpha = 0.95
          ctx.arc(n.x, n.y, 4, 0, Math.PI * 2)
          ctx.fill()
          ctx.globalAlpha = 1
        } else {
          ctx.beginPath()
          ctx.fillStyle = nodeColor
          ctx.globalAlpha = 0.8
          ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2)
          ctx.fill()
          ctx.globalAlpha = 1
        }
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
    return () => {
      window.removeEventListener('resize', resize)
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
