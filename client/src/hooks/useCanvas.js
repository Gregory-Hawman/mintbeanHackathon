import { useRef, useEffect } from 'react' 

function useCanvas(draw, options={}) {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext(options.ctx || '2d'); 
        let frameCount = 0;
        let animationFrameId

        const render = () => {
            frameCount++
            draw(ctx, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }

    }, [draw])

    return canvasRef
}

export default useCanvas;

