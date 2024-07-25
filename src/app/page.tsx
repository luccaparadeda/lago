import CommunityProof from "@/components/CommunityProof";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TrustedByCompanies from "@/components/TrustedByCompanies";
import WhoWeAre from "@/components/WhoWeAre";
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
			<section className="py-56 min-h-screen px-44">
				<WhyUs />
			</section>
			<section className="px-44 py-56">
				<WhoWeAre />
			</section>
			<section className="w-full flex items-center px-44">
				<CommunityProof />
			</section>
		</main>
	);
}
