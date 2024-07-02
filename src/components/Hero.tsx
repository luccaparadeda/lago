import { ArrowDown, MoveDown } from "lucide-react";
import type { FC } from "react";

const Hero = () => {
	return (
		<div className="flex flex-col gap-14">
			<div className="flex gap-8 items-center">
				<div className="w-16 h-[2px] bg-yellow-300" />
				<span className="tracking-widest">A HIKING GUIDE</span>
			</div>
			<h2 className="text-5xl">LOREM LOREM LOREM IPSUM</h2>
			<p className="flex gap-4">
				Conheça agora <MoveDown />
			</p>
		</div>
	);
};

export default Hero;
