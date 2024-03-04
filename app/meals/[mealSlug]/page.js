import Image from "next/image";
import classes from "./page.module.css";
import { GetMeal } from "@/lib/meals";
export default function MealsDetailsPage({ params }) {
	const meal = GetMeal(params.mealSlug);
	meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image src={meal.image} fill alt={meal.title} />
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						by <a href={` mail to : ${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{
						__html: meal.instructions,
					}}
				></p>
			</main>
		</>
	);
}
