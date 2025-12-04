import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (dotRef.current && outlineRef.current) {
                const posX = e.clientX;
                const posY = e.clientY;

                dotRef.current.style.left = `${posX}px`;
                dotRef.current.style.top = `${posY}px`;

                // Add a tiny delay or just follow directly for snappiness
                outlineRef.current.style.left = `${posX}px`;
                outlineRef.current.style.top = `${posY}px`;
            }
        };

        const handleHoverStart = () => {
            if (outlineRef.current) {
                outlineRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
                outlineRef.current.style.backgroundColor = 'rgba(204, 255, 0, 0.1)';
            }
        };

        const handleHoverEnd = () => {
            if (outlineRef.current) {
                outlineRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
                outlineRef.current.style.backgroundColor = 'transparent';
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        // Attach listeners to interactive elements globally for the cursor effect
        const interactables = document.querySelectorAll('a, button, .cursor-hover');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        // Mutation observer to handle dynamically added elements if needed, 
        // but for this simple app, we can just rely on the initial load or let individual components handle their specific hover classes
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            interactables.forEach(el => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot hidden md:block pointer-events-none fixed z-[9999]" />
            <div ref={outlineRef} className="cursor-outline hidden md:block pointer-events-none fixed z-[9999]" />
        </>
    );
};

export default CustomCursor;