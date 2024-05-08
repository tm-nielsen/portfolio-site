import { useEffect, useRef } from "react";

export default function useAutoScroll(effectDependencies: any[]) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() =>{
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches)
      scrollRef.current?.scrollIntoView({behavior: 'smooth', block: 'nearest'})
  }, effectDependencies)

  return scrollRef
}