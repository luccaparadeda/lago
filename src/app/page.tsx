import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TrustedByCompanies from "@/components/TrustedByCompanies";

export default function Home() {
	return (
		<main className="flex flex-col items-center min-h-screen min-w-full w-screen flex-1">
			<Navbar />
			<section className="flex mt-36 flex-col gap-14">
				<Hero />
			</section>
			<section>
				<TrustedByCompanies />
			</section>
		</main>
	);
}
