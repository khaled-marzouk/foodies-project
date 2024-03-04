import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/component/meals/meals-grid";
import { GetMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
	const meals = await GetMeals();
	return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious meals, created{" "}
					<span className={classes.highlight}>by you</span>
				</h1>
				<p>
					Choose your favorite recipes and cook it yourself. it is easy and fun
					!
				</p>
				<p className={classes.cta}>
					<Link href="/meals/share"> Share your favorite recipe</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense fallback={<p className={classes.loading}>Fetching Data</p>}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
}
