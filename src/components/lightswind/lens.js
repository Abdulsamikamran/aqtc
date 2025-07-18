"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// Utility function 'cn' (classnames) - implemented directly to resolve import error
// This is a simplified version of `clsx` for demonstration purposes.
// In a real project, you would typically import a dedicated utility like `clsx`
// and potentially `tailwind-merge` for more robust class merging.
function cn(...inputs) {
    return inputs.filter(Boolean).join(" ");
}
export const Lens = ({ children, zoomFactor = 1.5, lensSize = 170, isStatic = false, position = { x: 200, y: 150 }, hovering, setHovering, className, borderRadius = "lg", borderWidth = 0, borderColor = "border-gray-300", shadowIntensity = 'medium', animationDuration = 0.3, animationEasing = "easeOut", maskShape = 'circle', opacity = 1, blurEdge = false, smoothFollow = true, disabled = false, }) => {
    const containerRef = useRef(null);
    const [localIsHovering, setLocalIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });
    const isHovering = hovering !== undefined ? hovering : localIsHovering;
    const setIsHovering = setHovering || setLocalIsHovering;
    const handleMouseMove = (e) => {
        if (disabled || isStatic)
            return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (smoothFollow) {
            setMousePosition({ x, y });
        }
        else {
            // Snap to grid for less smooth following
            const gridSize = 20;
            setMousePosition({
                x: Math.round(x / gridSize) * gridSize,
                y: Math.round(y / gridSize) * gridSize
            });
        }
    };
    const shadowClasses = {
        none: '',
        light: 'shadow-sm',
        medium: 'shadow-md',
        heavy: 'shadow-xl'
    };
    const getMaskImage = (x, y) => {
        const radius = lensSize / 2;
        const shape = maskShape === 'circle'
            ? `circle ${radius}px at ${x}px ${y}px`
            : `ellipse ${radius}px ${radius}px at ${x}px ${y}px`;
        const gradient = blurEdge
            ? `radial-gradient(${shape}, black 60%, transparent 100%)`
            : `radial-gradient(${shape}, black 100%, transparent 100%)`;
        return gradient;
    };
    const lensContent = (_jsx(motion.div, { initial: { opacity: 0, scale: 0.58 }, animate: { opacity: opacity, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, transition: { duration: animationDuration, ease: animationEasing }, className: cn("absolute inset-0 overflow-hidden", borderWidth > 0 && `border-${borderWidth} ${borderColor}`, shadowClasses[shadowIntensity]), style: {
            maskImage: getMaskImage(isStatic ? position.x : mousePosition.x, isStatic ? position.y : mousePosition.y),
            WebkitMaskImage: getMaskImage(isStatic ? position.x : mousePosition.x, isStatic ? position.y : mousePosition.y),
            transformOrigin: `${isStatic ? position.x : mousePosition.x}px ${isStatic ? position.y : mousePosition.y}px`,
            zIndex: 50,
        }, children: _jsx("div", { className: "absolute inset-0", style: {
                transform: `scale(${zoomFactor})`,
                transformOrigin: `${isStatic ? position.x : mousePosition.x}px ${isStatic ? position.y : mousePosition.y}px`,
            }, children: children }) }));
    return (_jsxs("div", { ref: containerRef, className: cn("relative overflow-hidden z-20", `rounded-${borderRadius}`, disabled && "cursor-not-allowed opacity-50", className), onMouseEnter: () => !disabled && setIsHovering(true), onMouseLeave: () => !disabled && setIsHovering(false), onMouseMove: handleMouseMove, children: [children, isStatic ? (_jsx("div", { children: lensContent })) : (_jsx(AnimatePresence, { children: isHovering && !disabled && (_jsx("div", { children: lensContent })) }))] }));
};
