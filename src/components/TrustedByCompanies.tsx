import { FC } from "react";
import Logo1 from "@/../public/Logo (1).svg";
import Logo from "@/../public/Logo.svg";
import Vector from "@/../public/Vector (2).svg";
import Image from "next/image";

const TrustedByCompanies = () => {
	const logos = [
		{ src: Logo1, alt: "Logo 1" },
		{ src: Logo, alt: "Logo 2" },
		{ src: Vector, alt: "Vector" },
		{ src: Logo1, alt: "Logo 1" },
		{ src: Logo, alt: "Logo 2" },
		{ src: Vector, alt: "Vector" },
	];
	return (
		<div className="flex flex-col gap-7">
			<p>PARCERIAS COM EMPRESAS DO MERCADO</p>
			<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
				<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
					{logos.map((logo, index) => (
						<li key={logo.alt + index}>
							<Image src={logo.src} className="bg-black" alt={logo.alt} />
						</li>
					))}
				</ul>
				<ul
					className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
					aria-hidden="true"
				>
					{logos.map((logo, index) => (
						<li key={logo.alt + index}>
							<Image src={logo.src} className="bg-black" alt={logo.alt} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TrustedByCompanies;
