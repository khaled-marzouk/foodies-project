"use client";
// Import necessary modules
// import { useState } from "react";

// State variables to manage form data and errors
// const [formData, setFormData] = useState({
// 	name: "",
// 	email: "",
// 	title: "",
// 	summary: "",
// 	instructions: "",
// 	image: null,
// });
// const [errors, setErrors] = useState({});

// // Function to handle form submission
// const handleSubmit = (event) => {
// 	event.preventDefault();
// 	// Validate form data
// 	const validationErrors = {};
// 	if (!formData.name.trim()) {
// 		validationErrors.name = "Name is required";
// 	}
// 	if (!formData.email.trim()) {
// 		validationErrors.email = "Email is required";
// 	} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// 		validationErrors.email = "Invalid email address";
// 	}
// 	if (!formData.title.trim()) {
// 		validationErrors.title = "Title is required";
// 	}
// 	if (!formData.summary.trim()) {
// 		validationErrors.summary = "Summary is required";
// 	}
// 	if (!formData.instructions.trim()) {
// 		validationErrors.instructions = "Instructions are required";
// 	}
// 	if (!formData.image) {
// 		validationErrors.image = "image is required";
// 	}
// 	// Update errors state
// 	setErrors(validationErrors);
// };

// // const handleImageChange = (imageData) => {
// // 	// Update form data with the selected image data

// // 	setFormData((prevFormData) => ({
// // 		...prevFormData,
// // 		image: imageData,
// // 	}));
// // };

// // Function to handle input changes and validate on key up
// const handleInputChange = (event) => {
// 	const { name, value } = event.target;
// 	// Update form data with new input value
// 	setFormData((prevFormData) => ({
// 		...prevFormData,
// 		[name]: value,
// 	}));
// 	// Validate individual input on key up
// 	const validationErrors = {};
// 	if (name === "name" && !value.trim()) {
// 		validationErrors.name = "Name is required";
// 	}
// 	if (name === "email" && !value.trim()) {
// 		validationErrors.email = "Email is required";
// 	} else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
// 		validationErrors.email = "Invalid email address";
// 	}
// 	if (name === "title" && !value.trim()) {
// 		validationErrors.title = "Title is required";
// 	}
// 	if (name === "summary" && !value.trim()) {
// 		validationErrors.summary = "Summary is required";
// 	}
// 	if (name === "instructions" && !value.trim()) {
// 		validationErrors.instructions = "Instructions are required";
// 	}
// 	// if (name === "image" && !imageData) {
// 	// 	validationErrors.image = "image is required";
// 	// }
// 	// Update errors state
// 	setErrors({ ...errors, ...validationErrors });
// };

// const handleSubmition = async (formData) => {
// 	await shareMeal(formData);
// 	alert("hamada");
// };
import { useFormState } from "react-dom";
import classes from "./page.module.css";
import ImagePicker from "@/component/meals/image-picker";
import { shareMeal } from "@/lib/action";
import MealsFormSubmit from "@/component/meals/meals-form-submit";

export default function ShareMealPage() {
	const [state, formAction] = useFormState(shareMeal, { message: null });
	// const handleFormSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const formData = new FormData(e.target);

	// 	// Call shareMeal action passing previous state and form data
	// 	const newState = await shareMeal(state, formData);

	// 	// Update form state with new state
	// 	formAction(newState);
	// };
	// const showError = (fieldName) => {
	// 	return state.errors && state.errors[fieldName];
	// };
	return (
		<>
			<header className={classes.header}>
				<h1>
					Share your <span className={classes.highlight}>favorite meal</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</header>
			<main className={classes.main}>
				<form
					className={classes.form}
					// onSubmit={handleFormSubmit}
					// onSubmit={handleSubmit}
					// action={(formData) => handleSubmition(formData)}
					action={formAction}
				>
					<div className={classes.row}>
						<p>
							<label htmlFor="name">Your name</label>
							<input
								type="text"
								id="name"
								name="name"
								// value={formData.name}
								// onChange={handleInputChange}
							/>
							{/* {showError("name") && (
								<span className={classes.span}>{state.errors.name}</span>
							)} */}
						</p>
						<p>
							<label htmlFor="email">Your email</label>
							<input
								type="email"
								id="email"
								name="email"
								// value={formData.email}
								// onChange={handleInputChange}
							/>
							{/* {showError("email") && (
								<span className={classes.span}>{state.errors.email}</span>
							)} */}
						</p>
					</div>
					<p>
						<label htmlFor="title">Title</label>
						<input
							type="text"
							id="title"
							name="title"
							// value={formData.title}
							// onChange={handleInputChange}
						/>
						{/* {showError("title") && (
							<span className={classes.span}>{state.errors.title}</span>
						)} */}
					</p>
					<p>
						<label htmlFor="summary">Short Summary</label>
						<input
							type="text"
							id="summary"
							name="summary"
							// value={formData.summary}
							// onChange={handleInputChange}
						/>
						{/* {showError("summary") && (
							<span className={classes.span}>{state.errors.summary}</span>
						)} */}
					</p>
					<p>
						<label htmlFor="instructions">Instructions</label>
						<textarea
							id="instructions"
							name="instructions"
							rows="10"
							// value={formData.instructions}
							// onChange={handleInputChange}
						></textarea>
						{/* {showError("instructions") && (
							<span className={classes.span}>{state.errors.instructions}</span>
						)} */}
					</p>
					<ImagePicker
						label="your image"
						name="image"
						id="image"
						// value={formData.image}
						// onChange={handleImageChange}
					/>
					{/* {showError("image") && (
						<span className={classes.span}>{state.errors.image}</span>
					)} */}
					{state.message && (
						<span className={classes.span}>{state.message}</span>
					)}
					<p className={classes.actions}>
						<MealsFormSubmit />
					</p>
				</form>
			</main>
		</>
	);
}
