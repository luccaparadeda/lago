import CommunityProof from "@/components/CommunityProof";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import OurWork from "@/components/OurWork";
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
			<section className="pt-56 min-h-screen px-44">
				<WhyUs />
			</section>
			<section className="px-44 pb-56">
				<WhoWeAre />
			</section>
			<section className="w-full flex items-center px-44">
				<CommunityProof />
			</section>
			<section className="w-full py-52 flex justify-center items-center px-44">
				<OurWork />
			</section>
			<section className="w-full px-44">
				<OurServices />
			</section>
			<section className="w-full py-20 px-36	">
				<Footer />
			</section>
		</main>
	);
}
