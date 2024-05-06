import { useRef, useEffect } from "react";

export default function useOutsideClick(callback: () => void){
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e : MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        callback()
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref])

  return ref
}