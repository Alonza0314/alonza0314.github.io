import { useEffect, useRef } from 'react'

/**
 * 回傳一個 ref，掛在區塊最外層元素上。
 * 元素進入可視範圍時會被加上 `is-visible` class（搭配 .reveal-section 使用）。
 * 內部子元素可用 `.reveal-section.is-visible .xxx { animation: ... }` 觸發進場動畫與 stagger。
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
