'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function Scrollbar() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress);

	return <motion.div style={{ scaleX }} className='h-[1px] w-full bg-muted-foreground/40 z-10 origin-left absolute top-0 left-0' />;
}
