
import { useEffect, useRef } from 'react';

const ParticlesCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration
        const particleCount = 50;
        const particles = [];
        const mouse = { x: 0, y: 0, radius: 100 };

        const getRandomBlueColor = () => {
            const colors = [
                '#87ceeb', '#4682b4', '#1e3c72', '#e6f3ff',
                '#ffffff', '#4fc3f7', '#29b6f6', '#5dade2', '#3498db'
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = getRandomBlueColor();
                this.pulse = Math.random() > 0.7;
                this.pulseSpeed = Math.random() * 0.02 + 0.01;
                this.pulseOffset = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Pulse
                if (this.pulse) {
                    const time = Date.now() * this.pulseSpeed + this.pulseOffset;
                    this.opacity = Math.sin(time) * 0.3 + 0.5;
                }

                // Bounce
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = dx / distance;
                    const directionY = dy / distance;

                    this.x -= directionX * force * 2;
                    this.y -= directionY * force * 2;
                }
            }

            draw() {
                // Glow
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size * 2
                );
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.globalAlpha = this.opacity * 0.5;
                ctx.fill();

                // Core
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fill();
            }
        }

        const init = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
                        ctx.lineWidth = 1;
                        ctx.globalAlpha = 1 - (distance / 120);
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        // Event Listeners
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        init();
        animate();

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            // Adjust for scroll if necessary, but fixed position canvas usually uses clientX/Y
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = 0;
            mouse.y = 0;
        };

        // Add event listeners to window or canvas? 
        // Original code added to canvas. But canvas is covered by other elements (z-index).
        // Original: pointer-events: none on canvas. So mousemove must be on window.
        // Wait, original JS put mousemove on canvas, but CSS says pointer-events: none. 
        // Ah, `canvas.addEventListener('mousemove'...)` in original code. 
        // If pointer-events is none, it won't receive events.
        // Let's attach to window for better interaction if canvas is behind.
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="particles-canvas"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1
            }}
        />
    );
};

export default ParticlesCanvas;
