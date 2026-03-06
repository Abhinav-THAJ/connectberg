"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";

interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

function wrap(min: number, max: number, v: number) {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export function VelocityScroll({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax overflow-hidden tracking-tighter leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap py-10">
            <motion.div className="scroller font-black uppercase text-[clamp(4rem,10vw,10rem)] flex whitespace-nowrap flex-nowrap" style={{ x }}>
                {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} className="block mr-10 italic text-transparent bg-clip-text" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}>{children} </span>
                ))}
            </motion.div>
        </div>
    );
}
