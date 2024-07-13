import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TrustedByCompanies from "@/components/TrustedByCompanies";
import WhyUs from "@/components/WhyUs";

export default function Home() {
	return (
		<main className="flex text-white flex-col items-center bg-[#0B1D26] min-h-screen min-w-full w-screen flex-1">
			<div className="bg-bg-hero-image relative h-[calc(100vh+15rem)] bg-fixed bg-cover w-full">
				<Navbar />
				<section className="flex justify-center items-center flex-grow mt-36 flex-col gap-14">
					<Hero />
				</section>
				<section className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-[#0B1D26] flex items-center justify-center">
					<TrustedByCompanies />
				</section>
			</div>
			<section className="py-56 min-h-screen px-52">
				<WhyUs />
			</section>
		</main>
	);
}
