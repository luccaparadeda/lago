import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Instagram from "@/../public/instagram.svg";

const Navbar = () => {
	return (
		<nav className="grid grid-cols-3 h-fit w-full px-10 py-7">
			<h1 className="text-2xl font-bold tracking-widest">LAGO</h1>
			<div className="flex gap-10 justify-self-center">
				<Link
					href={"/Consultorias"}
					className="text-lg font-medium transition-colors hover:text-gray-500"
				>
					Consultorias
				</Link>
				<Link
					href={"/Consultorias"}
					className="text-lg font-medium transition-colors hover:text-gray-500"
				>
					Sobre nós
				</Link>
				<Link
					href={"/Consultorias"}
					className="text-lg font-medium transition-colors hover:text-gray-500"
				>
					Conheça nosso espaço
				</Link>
			</div>
			<div className="flex gap-4 justify-self-end">
				<p>Siga-nos</p>
				<Link href="https://www.instagram.com/lagoconsultorias/">
					<Image src={Instagram} alt="Instagram logo" />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
