import { useState, useEffect } from "react"

const NARROW_WINDOW_SIZE = 500

export default function useDetectNarrowWindow() {
  const [windowIsNarrow, setWindowIsNarrow] = useState<boolean>(window.innerHeight < NARROW_WINDOW_SIZE)

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${NARROW_WINDOW_SIZE}px)`)
    const handler = (e: MediaQueryListEvent) => setWindowIsNarrow(!e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return windowIsNarrow
}