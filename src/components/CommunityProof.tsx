import Image from "next/image";
import type { FC } from "react";

const CommunityProof: FC = () => {
	return (
		<div className="flex w-full flex-col gap-20 items-center lg:flex-row justify-between">
			<CommunityCard
				description="lorem lorem lorem lorem lorem lore"
				fullName="Pedro da Silve"
				profession="Programador"
				image="a"
			/>
			<CommunityCard
				description="lore m lroremmer ok krekorle orek"
				fullName="João Oliveira"
				image=""
				profession="Designer"
			/>
		</div>
	);
};

interface CommunityCardProps {
	image: string;
	fullName: string;
	profession: string;
	description: string;
}

const CommunityCard: FC<CommunityCardProps> = ({
	description,
	fullName,
	image,
	profession,
}) => {
	return (
		<div className="flex max-w-sm gap-11">
			<Image
				src={"/Oval.png"}
				width={100}
				height={100}
				alt="imagem da pessoa que avaliou"
				className="rounded-full"
			/>
			<div className="flex flex-col gap-1">
				<Image src={"/stars.png"} alt="estrelas" width={70} height={19} />
				<div className="flex gap-5">
					<p className="text-sm">{fullName}</p>
					<p className="text-sm font-extralight text-gray-500">{profession}</p>
				</div>
				<p className="font-bold">{description}</p>
			</div>
		</div>
	);
};

export default CommunityProof;
