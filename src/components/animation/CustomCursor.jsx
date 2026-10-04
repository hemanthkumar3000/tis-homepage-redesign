import { motion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isFinePointer, setIsFinePointer] = useState(false)

  const cursorX = useSpring(-100, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  })

  const cursorY = useSpring(-100, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')
    setIsFinePointer(mediaQuery.matches)

    const handlePointerChange = (event) => {
      setIsFinePointer(event.matches)
    }

    mediaQuery.addEventListener('change', handlePointerChange)

    return () => {
      mediaQuery.removeEventListener('change', handlePointerChange)
    }
  }, [])

  useEffect(() => {
    if (!isFinePointer) {
      return undefined
    }

    const handleMouseMove = (event) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseOver = (event) => {
      const interactiveElement = event.target.closest(
        'a, button, input, textarea, select, [role="button"]',
      )

      setIsHovering(Boolean(interactiveElement))
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [cursorX, cursorY, isFinePointer])

  if (!isFinePointer) {
    return null
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 rounded-full bg-gold mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0.65 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[99] h-9 w-9 rounded-full border border-gold"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{ duration: 0.18 }}
      />
    </>
  )
}