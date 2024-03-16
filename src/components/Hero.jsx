// import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col mt-5 justify-center items-center">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>

				<div className="">
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi , I&apos;m <span className="text-[#915eff]">Amit</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						I develop full stack applications
						{/* I am a Full Stack Developer <br />
						and Problem Solver */}
						{/* and <br /> */}
						{/* Tech Enthusiast */}
					</p>
				</div>
			</div>

			<ComputersCanvas />

			<div className="absolute xs:bottom-7 bottom-32 w-full flex justify-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
							className="w-3 h-3 mb-1 bg-secondary rounded-full"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
