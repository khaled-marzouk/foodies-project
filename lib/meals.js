import sql from "better-sqlite3";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";
const db = sql("meals.db");
export async function GetMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	// throw new Error("loading error");
	return db.prepare("SELECT * FROM meals").all();
}
export function GetMeal(slug) {
	return db.prepare("SELECT*FROM meals WHERE slug = ? ").get(slug);
}
export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split(".").pop();
	const fileName = `${meal.slug}.${extension}`;
	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await meal.image.arrayBuffer();
	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error("saving image failed");
		}
	});
	meal.image = `/images/${fileName}`;
	db.prepare(
		`INSERT INTO meals 
	(title,creator,creator_email,summary,instructions,image,slug)
	VALUES(
		@title,
		@creator,
		@creator_email,
		@summary,
		@instructions,
		@image,
		@slug
	)`
	).run(meal);
}
