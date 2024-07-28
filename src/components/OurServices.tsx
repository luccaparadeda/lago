import Image from "next/image";
import type { FC } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const OurServices: FC = () => {
	return (
		<div className="w-full min-h-screen items-center gap-24 flex flex-col">
			<div className="flex text-center items-center flex-col gap-4">
				<p className="text-3xl font-semibold">Nossos Serviços</p>
				<p className="w-full md:w-2/3 text-gray-300">
					LOREM LOREM Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolore excepturi aut magni obcaecati repellendus modi unde doloremque,
					architecto quis, cupiditate tempore ex! Blanditiis nostrum amet qui id
					laudantium ad animi.
				</p>
			</div>
			<div className="w-full flex-wrap gap-y-5 md:gap-y-0 gap-x-7 items-center grid grid-rows-3 grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-3">
				<ServiceCard
					badge="Badge"
					buttonText="Button"
					imageAlt="Image"
					imageSrc="/OurServices.jpg"
				/>
				<ServiceCard
					badge="Badge"
					buttonText="Button"
					imageAlt="Image"
					imageSrc="/OurServices.jpg"
				/>
				<ServiceCard
					className="md:col-span-2 lg:col-span-1"
					badge="Badge"
					buttonText="Button"
					imageAlt="Image"
					imageSrc="/OurServices.jpg"
				/>
			</div>
		</div>
	);
};

interface ServiceCardProps {
	badge: string;
	imageSrc: string;
	imageAlt: string;
	buttonText: string;
	className?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
	badge,
	buttonText,
	imageAlt,
	imageSrc = "/OurServices.jpg",
	className,
}) => {
	return (
		<div
			className={cn(
				"bg-white px-6 pb-5 pt-10 rounded-2xl items-center flex flex-col gap-9",
				className,
			)}
		>
			<p className="bg-purple-200/90 text-sm text-center w-fit text-purple-800 rounded-3xl px-5 py-1">
				{badge}
			</p>
			<Image
				className="object-cover"
				src={imageSrc}
				alt={imageAlt}
				width={300}
				height={300}
			/>
			<Button className="w-full bg-purple-800">{buttonText}</Button>
		</div>
	);
};

export default OurServices;
