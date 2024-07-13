import { icons, LucideIcon, Moon } from "lucide-react";
import type { FC } from "react";
import WhyUsImage from "@/../public/WhyUsImage.svg";
import Image from "next/image";

interface WhyUsCards {
	icon: keyof typeof icons;
	title: string;
	description: string;
}

const WHY_US_CARDS: WhyUsCards[] = [
	{
		icon: "Activity",
		title: "Preço transparente",
		description:
			"Voce sabe exatamente o que acontece a todo momento podendo assim tomar decisçoes compativeis com o que voce espera,esse ser o melgorinvestimento que voce podera toamr",
	},
	{
		icon: "Airplay",
		title: "Flexible Spaces",
		description:
			"Voce sabe exatamente o que acontece a todo momento podendo assim tomar decisçoes compativeis com o que voce espera,esse ser o melgorinvestimento que voce podera toamr",
	},
	{
		icon: "AirVent",
		title: "Pessoas qualificadas",
		description:
			"Voce sabe exatamente o que acontece a todo momento podendo assim tomar decisçoes compativeis com o que voce espera,esse ser o melgorinvestimento que voce podera toamr",
	},
];

const WhyUs: FC = () => {
	return (
		<div className="flex flex-col gap-20 w-full items-center">
			<p className="text-4xl flex gap-3 font-semibold">
				Por quê escolher{" "}
				<Image width={100} src={WhyUsImage} alt="imagem simples para beleza" />
				<span className="italic">o LAGO</span>
			</p>
			<div className="grid gap-12 justify-center grid-cols-1 lg:grid-cols-3 lg:grid-rows-1">
				{WHY_US_CARDS.map((card) => {
					const LucideIcon = icons[card.icon];
					return (
						<div
							key={card.title}
							className="flex text-center items-center flex-col gap-6"
						>
							<LucideIcon size={32} />
							<p className="italic text-xl ">{card.title}</p>
							<p className="font-extralight">{card.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default WhyUs;
