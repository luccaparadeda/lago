import Image from "next/image";
import type { FC } from "react";

const WhoWeAre: FC = () => {
	return (
		<div className="flex flex-col gap-20 lg:gap-32">
			<div className="flex flex-col gap-9">
				<p className="text-orange-500 font-light text-sm">NOSSA HISTÓRIA</p>
				<p className="max-w-xl text-xl">
					We know how everything works and why your bussiness is failling over
					and over again
				</p>
			</div>
			<div className="flex gap-10 flex-col items-end lg:items-start lg:grid lg:grid-cols-2">
				<div className="relative">
					<Image
						src="/main-person-image.jpg"
						alt="Imagem simples para beleza"
						className="rounded-lg"
						width={300}
						height={300}
					/>
				</div>
				<div className="flex flex-col gap-10 justify-between">
					<div className="flex justify-between">
						<Image
							width={200}
							height={200}
							src={"/second-person-image.png"}
							alt="imagem simples"
						/>
						<Image
							width={200}
							height={200}
							src={"/third-person-image.png"}
							alt="imagem simples"
							className="hidden lg:block"
						/>
					</div>
					<p className="text-sm font-light">
						We share common trends and stratergies for improving income and
						making sure you stay in high demand. With lots of unique blocks, you
						can easily build a page without coding{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
