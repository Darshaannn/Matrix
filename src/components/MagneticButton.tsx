import { useRef, type ReactNode, type MouseEvent as ReactMouseEvent } from "react";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
    children,
    className = "",
    onClick,
    type = "button",
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);

    const onMove = (e: ReactMouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        ref.current.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    };

    const onLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = "translate(0, 0)";
    };

    return (
        <button
            ref={ref}
            type={type}
            className={`magnetic-btn ${className}`}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
