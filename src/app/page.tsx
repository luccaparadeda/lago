import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TrustedByCompanies from "@/components/TrustedByCompanies";

export default function Home() {
	return (
		<main className="flex flex-col bg-[#0B1D26] items-center min-h-screen min-w-full w-screen flex-1">
			<div className="bg-bg-hero-image shadow-inner-shadow-hero-image h-[calc(100vh+10rem)] bg-fixed bg-cover w-full">
				<Navbar />
				<section className="flex justify-center items-center mt-36 flex-col gap-14">
					<Hero />
				</section>
			</div>
				<section className="w-full flex items-center justify-center mt-48">
					<TrustedByCompanies />
				</section>
		</main>
	);
}
