import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
    const [active, setActive] = useState(false);
    const [clicking, setClicking] = useState(false);
    const posRef = useRef({ x: -100, y: -100 });
    const rafRef = useRef<number>(0);

    useEffect(() => {
        // Smoothly lerp the outer ring toward the mouse
        const lerp = (start: number, end: number, factor: number) =>
            start + (end - start) * factor;

        const animate = () => {
            setPos(prev => ({
                x: lerp(prev.x, posRef.current.x, 0.12),
                y: lerp(prev.y, posRef.current.y, 0.12),
            }));
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);

        const onMove = (e: MouseEvent) => {
            posRef.current = { x: e.clientX, y: e.clientY };
            setDotPos({ x: e.clientX, y: e.clientY });
        };

        const onDown = () => setClicking(true);
        const onUp = () => setClicking(false);

        const attachHovers = () => {
            document.querySelectorAll("a, button").forEach(el => {
                el.addEventListener("mouseenter", () => setActive(true));
                el.addEventListener("mouseleave", () => setActive(false));
            });
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mousedown", onDown);
        window.addEventListener("mouseup", onUp);
        attachHovers();

        // Re-attach on DOM changes (for dynamically rendered elements)
        const observer = new MutationObserver(attachHovers);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mousedown", onDown);
            window.removeEventListener("mouseup", onUp);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Outer ring — lerps smoothly */}
            <div
                className="cursor-ring"
                style={{
                    left: pos.x,
                    top: pos.y,
                    width: active ? 44 : clicking ? 24 : 32,
                    height: active ? 44 : clicking ? 24 : 32,
                    borderColor: active ? "#F59E0B" : "rgba(15,23,42,0.6)",
                    backgroundColor: active ? "rgba(245,158,11,0.08)" : "transparent",
                }}
            />
            {/* Inner dot — instant */}
            <div
                className="cursor-dot"
                style={{
                    left: dotPos.x,
                    top: dotPos.y,
                    backgroundColor: active ? "#F59E0B" : "#0f172a",
                    transform: `translate(-50%, -50%) scale(${clicking ? 0.5 : 1})`,
                }}
            />
        </>
    );
}
