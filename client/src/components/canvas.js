import React from 'react'
import useCanvas from '../hooks/useCanvas'
import '../css/canvas.css'

function Canvas(props) {
    const { draw, options, ...rest } = props
    const { ctx, ...moreCOnfig} = options
    const canvasRef = useCanvas(draw)

    return (
         <div className="workSpace">
             <div className="toolBar">
                <div>Draw</div>
                <div>Size</div>
                <div>Fill</div>
                <div>Color</div>
                {/* STRETCH GOAL */}
                <div>Crop</div> 
                {/* STRETCH GOAL */}
             </div>
             <canvas className="myCanvas" ref={canvasRef} {...rest}>
                 <p>Your browser does not support canvases</p>
             </canvas>
             <button>Save</button>
         </div>
    )
}

export default Canvas;

// const width = canvas.width = window.innerWidth/1.25;
// const height = canvas.height = window.innerHeight/1.25;

// ctx.fillStyle = 'rgb(200, 0, 0, 0.5)';
// ctx.fillRect(75, 0, 100, 100);

// ctx.fillStyle = 'rgba(0, 200, 0, 0.5)';
// ctx.fillRect(100, 25, 100, 100);

// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
// ctx.fillRect(125, 50, 100, 100);