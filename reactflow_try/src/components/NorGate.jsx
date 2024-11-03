import React, { useEffect, useRef } from 'react';

const NorGateCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set line properties
        ctx.lineWidth = 5.6; 
        ctx.strokeStyle = 'black';

        // Draw the upper input line
        ctx.beginPath();
        ctx.moveTo(7, 56); 
        ctx.lineTo(42, 56); 
        ctx.stroke();

        // Draw the lower input line
        ctx.beginPath();
        ctx.moveTo(7, 84); 
        ctx.lineTo(42, 84); 
        ctx.stroke();

        // Draw the curved input side (cone shape on the left)
        ctx.beginPath();
        ctx.moveTo(35, 28); 
        ctx.quadraticCurveTo(56, 70, 35, 112); 
        ctx.stroke();

        // Draw the NOR gate's main shape (convex output side)
        ctx.beginPath();
        ctx.moveTo(35, 28); 
        ctx.quadraticCurveTo(154, 70, 35, 112); 
        ctx.stroke();

        // Draw the NOT bubble at the end of the NOR gate's output
        ctx.beginPath();
        ctx.arc(100, 70, 5.6, 0, 2 * Math.PI); 
        ctx.fillStyle = 'white'; 
        ctx.fill();
        ctx.stroke();

        // Draw the output line on the right side of the NOT bubble
        ctx.beginPath();
        ctx.moveTo(105, 70); 
        ctx.lineTo(126, 70); 
        ctx.stroke();
    }, []);

    return <canvas ref={canvasRef} width={140} height={140} />; 
};

export default NorGateCanvas;
