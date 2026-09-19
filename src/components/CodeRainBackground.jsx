import { useEffect, useRef } from 'react'

// Fondo animado tipo "consola" — columnas de caracteres cayendo, estilo Matrix/CMD.
// Se dibuja en un <canvas> que ocupa toda la pantalla, detrás del contenido.
export default function CodeRainBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const chars =
      '01{}[]<>/\\;:=+-*ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&_ABCXYZ'
    const fontSize = 15
    let columns = 0
    let drops = []

    function setup() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      columns = Math.floor(canvas.width / fontSize)
      drops = new Array(columns).fill(1)
    }

    function draw() {
      // capa semitransparente para dejar "rastro" de las letras anteriores
      ctx.fillStyle = 'rgba(6, 10, 8, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = 'rgba(60, 255, 140, 0.7)'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    setup()
    const interval = setInterval(draw, 45)
    window.addEventListener('resize', setup)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', setup)
    }
  }, [])

  return <canvas ref={canvasRef} className="code-rain-canvas" />
}
