import Link from "next/link";

export default function MealsPage() {
	return (
		<main>
			<h1>Meals page</h1>
			<p>
				<Link href="/meals/share"> shared meals </Link>
			</p>
		</main>
	);
}
