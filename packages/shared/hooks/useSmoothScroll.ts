import { useCallback } from 'react'

export function useSmoothScroll() {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return { scrollTo }
}
