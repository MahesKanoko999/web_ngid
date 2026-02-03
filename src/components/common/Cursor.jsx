
import { useEffect } from 'react';

const Cursor = () => {
    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(135, 206, 235, 0.8) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            transition: all 0.1s ease;
            mix-blend-mode: screen;
        `;
        document.body.appendChild(cursor);

        const handleMouseMove = (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';

            // Trail
            const trail = document.createElement('div');
            trail.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: rgba(135, 206, 235, 0.6);
                border-radius: 50%;
                left: ${e.clientX - 2}px;
                top: ${e.clientY - 2}px;
                pointer-events: none;
                z-index: 9999;
                animation: fadeTrail 0.5s ease-out forwards;
            `;
            document.body.appendChild(trail);
            setTimeout(() => trail.remove(), 500);
        };

        const handleClick = (e) => {
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: fixed;
                top: ${e.clientY}px;
                left: ${e.clientX}px;
                width: 0;
                height: 0;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 10000;
                animation: rippleEffect 0.6s ease-out;
            `;
            document.body.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);

        // Add styles for animations if not already present
        if (!document.getElementById('cursor-styles')) {
            const style = document.createElement('style');
            style.id = 'cursor-styles';
            style.textContent = `
                @keyframes fadeTrail {
                    0% { opacity: 1; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0); }
                }
                @keyframes rippleEffect {
                    0% { width: 0; height: 0; opacity: 1; }
                    100% { width: 200px; height: 200px; opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
            if (document.body.contains(cursor)) document.body.removeChild(cursor);
        };
    }, []);

    return null; // This component handles DOM manipulation directly
};

export default Cursor;
