import React, { useState, useEffect } from "react";

const COUNTDOWN_TARGET = new Date("2025-08-27T23:59:59");

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);
	return { days, hours, minutes, seconds };
};

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="">
			<div className="flex justify-center gap-[clamp(0.25rem,1vw,2rem)] flex-nowrap">
				{Object.entries(timeLeft).map(([label, value]) => (
					<div 
						key={label} 
						className="bg-[rgba(16,16,28,0.8)] p-[clamp(0.25rem,1vw,2rem)] rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.1)] border border-[rgba(0,255,255,0.1)] min-w-[clamp(50px,10vw,150px)] backdrop-blur-[10px]"
					>
						<div className="text-[clamp(1rem,3vw,3rem)] font-bold text-[#ffffff] font-sans [text-shadow:0_0_10px_rgba(0,255,255,0.5)] m-1">
							{value.toString().padStart(2, '0')}
						</div>
						<span className="uppercase text-[clamp(0.5rem,1vw,1rem)] text-[#fff] opacity-70 tracking-wider">
							{label}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Countdown;