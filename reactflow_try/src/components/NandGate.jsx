import React, { useEffect, useRef } from 'react';

const NandGateCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set line properties
        ctx.lineWidth = 5.6; // 70% of original line width (8 * 0.7)
        ctx.strokeStyle = 'black';

        // Draw the left vertical line (input side)
        ctx.beginPath();
        ctx.moveTo(35, 28); // 70% of (50, 40)
        ctx.lineTo(35, 112); // 70% of (50, 160)
        ctx.stroke();

        // Draw the upper input line
        ctx.beginPath();
        ctx.moveTo(7, 56); // 70% of (10, 80)
        ctx.lineTo(35, 56); // 70% of (50, 80)
        ctx.stroke();

        // Draw the lower input line
        ctx.beginPath();
        ctx.moveTo(7, 84); // 70% of (10, 120)
        ctx.lineTo(35, 84); // 70% of (50, 120)
        ctx.stroke();

        // Draw the AND gate shape (output side)
        ctx.beginPath();
        ctx.moveTo(31.5, 28); // 70% of (45, 40)
        ctx.arc(56, 70, 42, -Math.PI / 2, Math.PI / 2, false); // 70% of center and radius
        ctx.lineTo(31.5, 112); // 70% of (45, 160)
        ctx.stroke();

        // Draw the NOT bubble at the end of the AND gate's output
        ctx.beginPath();
        ctx.arc(101.5, 70, 5.6, 0, 2 * Math.PI); // 70% of (145, 100) and radius 8
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();

        // Draw the output line on the right side of the NOT bubble
        ctx.beginPath();
        ctx.moveTo(107.1, 70); // 70% of (153, 100)
        ctx.lineTo(126, 70); // 70% of (180, 100)
        ctx.stroke();
    }, []);

    return <canvas ref={canvasRef} width={140} height={140} />; // 70% of (200, 200)
};

export default NandGateCanvas;
