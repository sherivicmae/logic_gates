import React, { useEffect, useRef } from 'react';

const OrGateCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set line properties
        ctx.lineWidth = 5.6; // 70% of original line width (8 * 0.7)
        ctx.strokeStyle = 'black';

        // Draw the upper input line
        ctx.beginPath();
        ctx.moveTo(7, 56); // 70% of (10, 80)
        ctx.lineTo(42, 56); // 70% of (60, 80)
        ctx.stroke();

        // Draw the lower input line
        ctx.beginPath();
        ctx.moveTo(7, 84); // 70% of (10, 120)
        ctx.lineTo(42, 84); // 70% of (60, 120)
        ctx.stroke();

        // Draw the curved input side (cone shape on the left)
        ctx.beginPath();
        ctx.moveTo(35, 28); // 70% of (50, 40)
        ctx.quadraticCurveTo(56, 70, 35, 112); // 70% of control point and end points
        ctx.stroke();

        // Draw the OR gate's main shape (convex output side)
        ctx.beginPath();
        ctx.moveTo(35, 28); // 70% of (50, 40)
        ctx.quadraticCurveTo(154, 70, 35, 112); // 70% of control point and end points
        ctx.stroke();

        // Draw the output line on the right side of the convex curve
        ctx.beginPath();
        ctx.moveTo(91, 70); // 70% of (130, 100)
        ctx.lineTo(126, 70); // 70% of (180, 100)
        ctx.stroke();
    }, []);

    return <canvas ref={canvasRef} width={140} height={140} />; // 70% of (200, 200)
};

export default OrGateCanvas;
