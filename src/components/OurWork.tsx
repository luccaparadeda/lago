import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const OurWork: FC = () => {
	return (
		<div className="w-2/3 h-screen items-center gap-24 flex flex-col">
			<div className="text-center flex flex-col gap-4">
				<p className="text-red-500 font-light text-sm">Case Studies</p>
				<p className="font-semibold text-2xl">
					Our Work describe why we are the best in the
				</p>
			</div>
			<div className="w-full flex-1 gap-x-20 gap-y-7 grid grid-cols-2 grid-rows-5">
				<OurWorkCard
					className="col-span-1 row-span-3"
					subTitle="Case Study"
					title="Title"
					altText="Our Work 1"
					imageSrc={"/ourWorkImage.jpg"}
					href="/"
				/>
				<OurWorkCard
					className="col-span-1 row-span-2"
					subTitle="Case Study"
					title="Title"
					altText="Our Work 2"
					imageSrc={"/ourWorkImage.jpg"}
					href="/"
				/>
				<OurWorkCard
					className="col-span-1 row-span-3"
					subTitle="Case Study"
					title="Title"
					altText="Our Work 3"
					imageSrc={"/ourWorkImage.jpg"}
					href="/"
				/>
				<OurWorkCard
					className="col-span-1 row-span-2"
					subTitle="Case Study"
					title="Title"
					altText="Our Work 4"
					imageSrc={"/ourWorkImage.jpg"}
					href="/"
				/>
			</div>
		</div>
	);
};

interface OurWorkCardProps {
	className: string;
	subTitle: string;
	title: string;
	altText: string;
	imageSrc: string;
	href: string;
}

const OurWorkCard: FC<OurWorkCardProps> = ({
	className,
	subTitle,
	title,
	altText,
	imageSrc,
	href,
}) => {
	return (
		<Link href={href} className={cn("flex flex-col gap-4", className)}>
			<div className="relative flex-1">
				<Image
					src={imageSrc}
					className="object-cover rounded-2xl"
					fill
					alt={altText}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<p>{subTitle}</p>
				<p>{title}</p>
			</div>
		</Link>
	);
};
export default OurWork;
