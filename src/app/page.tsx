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
				<section className="flex justify-center px-10 items-center flex-grow mt-36 flex-col gap-14">
					<Hero />
				</section>
				<section className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-[#0B1D26] flex items-center justify-center">
					<TrustedByCompanies />
				</section>
			</div>
			<section className="pt-56 px-10 min-h-screen lg:px-44">
				<WhyUs />
			</section>
			<section className=" px-10 lg:px-44  py-56 lg:pt-0">
				<WhoWeAre />
			</section>
			<section className="w-full px-10 flex items-center lg:px-44">
				<CommunityProof />
			</section>
			<section className="w-full px-10 py-52 flex justify-center items-center lg:px-44">
				<OurWork />
			</section>
			<section className="w-full px-10 lg:px-44">
				<OurServices />
			</section>
			<section className="w-full py-20 px-10 lg:px-36	">
				<Footer />
			</section>
		</main>
	);
}
