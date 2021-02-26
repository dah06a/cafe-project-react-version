import React, { useEffect, useRef } from 'react';
import { displayApples } from './Apple';

const CanvasArea = (props) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");

            displayApples(ctx, canvas.width, canvas.height)

            requestAnimationFrame(render);
        };
        render();
    }, []);

    return <canvas
        id="canvas"
        ref={canvasRef}
        height="500"
        width={window.innerWidth - 300}
    />
}

export default CanvasArea;
