import { useRef, useEffect } from 'react';

const Constellation = ({ children }) => {
    const canvasRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const dot = dotRef.current;
        const ctx = canvas.getContext('2d');

        let W, H, particles = [], animId;
        let animRunning = true;

        // ── Mouse state ────
        // Tracked on `window` — stays current even when cursor is over child elements.
        // When cursor leaves the browser window, active→false so repel stops,but the animation loop itself NEVER stops.
        const mouse = { x: -9999, y: -9999, active: false };
        const PARTICLE_COUNT = 60;
        const MAX_DIST = 110;
        const MOUSE_DIST = 140;
        const MOUSE_REPEL = 55;
        const MAX_SPEED = 2.0;
        const FRICTION = 0.96;
        const REPEL_STRENGTH = 0.18;
        const COLORS = ['#ffffff', '#2bdf9d', '#007523', '#863e00', '#000000'];

        // ── Helpers ───
        const clamp = (v, mn, mx) => Math.min(Math.max(isFinite(v) ? v : 0, mn), mx);
        const randColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];
        const toHex2 = (n) => Math.round(clamp(n, 0, 255)).toString(16).padStart(2, '0');
        const resize = () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };

        // ── Particle Generation ────
        const createParticle = (x, y, isExplosion = false) => {
            const angle = Math.random() * Math.PI * 2;
            const speed = isExplosion ? 1.0 : 0.18 + Math.random() * 0.22;
            return {
                x: x ?? Math.random() * W,
                y: y ?? Math.random() * H,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                r: 1.2 + Math.random() * 1.4,
                color: randColor(),
                alpha: 0.4 + Math.random() * 0.5,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.015 + Math.random() * 0.02,
            };
        };

        const resetParticle = (p) => {
            p.x = Math.random() * W;
            p.y = Math.random() * H;
            p.vx = (Math.random() - 0.5) * 0.4;
            p.vy = (Math.random() - 0.5) * 0.4;
        };

        const init = () => {
            resize();
            particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle());
        };

        const draw = () => {
            if (!animRunning) return;
            ctx.clearRect(0, 0, W, H);
            // Subtle centre glow
            try {
                const grd = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, W * 0.5);
                grd.addColorStop(0, 'rgba(74,240,176,0.04)');
                grd.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = grd;
                ctx.fillRect(0, 0, W, H);
            } catch (_) { }

            // ── Particles ────
            particles.forEach(p => {
                if (!isFinite(p.x) || !isFinite(p.y) || !isFinite(p.vx) || !isFinite(p.vy)) {
                    resetParticle(p);
                    return;
                }
                p.pulse += p.pulseSpeed;
                const pulseAlpha = p.alpha + Math.sin(p.pulse) * 0.15;
                if (mouse.active) {
                    const mdx = p.x - mouse.x;
                    const mdy = p.y - mouse.y;
                    const md = Math.sqrt(mdx * mdx + mdy * mdy);
                    if (md < MOUSE_REPEL && md > 0.5) {
                        const force = ((MOUSE_REPEL - md) / MOUSE_REPEL) * REPEL_STRENGTH;
                        p.vx += (mdx / md) * force;
                        p.vy += (mdy / md) * force;
                    }
                }
                // Speed cap
                const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (spd > MAX_SPEED) {
                    p.vx = (p.vx / spd) * MAX_SPEED;
                    p.vy = (p.vy / spd) * MAX_SPEED;
                }

                // Friction + integrate — UNCONDITIONAL, particles always drift
                p.vx *= FRICTION;
                p.vy *= FRICTION;
                p.x += p.vx;
                p.y += p.vy;

                // Wrap
                if (p.x < -20) p.x = W + 20;
                else if (p.x > W + 20) p.x = -20;
                if (p.y < -20) p.y = H + 20;
                else if (p.y > H + 20) p.y = -20;

                // Core dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = clamp(pulseAlpha, 0, 1);
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            // ── Connections ────
            for (let i = 0; i < particles.length; i++) {
                const a = particles[i];
                if (!isFinite(a.x) || !isFinite(a.y)) continue;
                for (let j = i + 1; j < particles.length; j++) {
                    const b = particles[j];
                    if (!isFinite(b.x) || !isFinite(b.y)) continue;

                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist >= MAX_DIST) continue;

                    const t = 1 - dist / MAX_DIST;
                    let boost = 1;
                    if (mouse.active) {
                        const mda = Math.hypot(a.x - mouse.x, a.y - mouse.y);
                        const mdb = Math.hypot(b.x - mouse.x, b.y - mouse.y);
                        if (mda < MOUSE_DIST || mdb < MOUSE_DIST) boost = 1.6;
                    }

                    try {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
                        const hex = toHex2(t * 160 * boost);
                        grad.addColorStop(0, a.color + hex);
                        grad.addColorStop(1, b.color + hex);
                        ctx.strokeStyle = grad;
                        ctx.lineWidth = clamp(t * 1.2 * boost, 0, 3);
                        ctx.stroke();
                    } catch (_) { }
                }
            }
            animId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
            if (dot) {
                dot.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
                dot.style.opacity = 1;
            }
        };

        const handleDocMouseLeave = () => {
            mouse.active = false;
            if (dot) dot.style.opacity = 0;
        };

        // const handleClick = (e) => {
        //     for (let k = 0; k < 6; k++) { particles.push(createParticle(e.clientX, e.clientY, true)); }
        //     while (particles.length > PARTICLE_COUNT + 30) particles.shift();
        // };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        // window.addEventListener('click', handleClick);
        document.addEventListener('mouseleave', handleDocMouseLeave);

        init();
        draw();

        return () => {
            animRunning = false;
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            // window.removeEventListener('click', handleClick);
            document.removeEventListener('mouseleave', handleDocMouseLeave);
        };
    }, []);

    return (
        <>
            <canvas ref={canvasRef}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', display: 'block', }}/>
            <div ref={dotRef} style={{ position: 'fixed', pointerEvents: 'none', opacity: 0, transition: 'opacity 0.3s ease', zIndex: 9999, }} />
            <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
                {children}
            </div>
        </>
    );
};

export default Constellation;