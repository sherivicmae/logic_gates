import React, { useEffect, useRef } from 'react';

const BufferGateCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set line properties
        ctx.lineWidth = 5.6; 
        ctx.strokeStyle = 'black';

        // Draw the input line on the left side
        ctx.beginPath();
        ctx.moveTo(7, 70); 
        ctx.lineTo(42, 70); 
        ctx.stroke();

        // Draw the triangle for the NOT gate
        ctx.beginPath();
        ctx.moveTo(42, 40);  
        ctx.lineTo(42, 100); 
        ctx.lineTo(98, 70);  
        ctx.closePath();
        ctx.stroke();

        // Draw the output line on the right side of the NOT bubble
        ctx.beginPath();
        ctx.moveTo(100, 70); 
        ctx.lineTo(120, 70); 
        ctx.stroke();
    }, []);

    return <canvas ref={canvasRef} width={140} height={140} />; 
};

export default BufferGateCanvas;