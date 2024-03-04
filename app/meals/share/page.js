"use client";
// Import necessary modules
import { useState } from "react";
import classes from "./page.module.css";
import ImagePicker from "@/component/meals/image-picker";
import { shareMeal } from "@/lib/action";

export default function ShareMealPage() {
	// State variables to manage form data and errors
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		title: "",
		summary: "",
		instructions: "",
		image: null,
	});
	const [errors, setErrors] = useState({});

	// Function to handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		// Validate form data
		const validationErrors = {};
		if (!formData.name.trim()) {
			validationErrors.name = "Name is required";
		}
		if (!formData.email.trim()) {
			validationErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			validationErrors.email = "Invalid email address";
		}
		if (!formData.title.trim()) {
			validationErrors.title = "Title is required";
		}
		if (!formData.summary.trim()) {
			validationErrors.summary = "Summary is required";
		}
		if (!formData.instructions.trim()) {
			validationErrors.instructions = "Instructions are required";
		}
		if (!formData.image) {
			validationErrors.image = "image is required";
		}
		// Update errors state
		setErrors(validationErrors);
	};

	const handleImageChange = (imageData) => {
		// Update form data with the selected image data

		setFormData((prevFormData) => ({
			...prevFormData,
			image: imageData,
		}));
	};

	// Function to handle input changes and validate on key up
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		// Update form data with new input value
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
		// Validate individual input on key up
		const validationErrors = {};
		if (name === "name" && !value.trim()) {
			validationErrors.name = "Name is required";
		}
		if (name === "email" && !value.trim()) {
			validationErrors.email = "Email is required";
		} else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
			validationErrors.email = "Invalid email address";
		}
		if (name === "title" && !value.trim()) {
			validationErrors.title = "Title is required";
		}
		if (name === "summary" && !value.trim()) {
			validationErrors.summary = "Summary is required";
		}
		if (name === "instructions" && !value.trim()) {
			validationErrors.instructions = "Instructions are required";
		}
		if (name === "image" && !imageData) {
			validationErrors.image = "image is required";
		}
		// Update errors state
		setErrors({ ...errors, ...validationErrors });
	};

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
					// onSubmit={handleSubmit}
					action={shareMeal}
				>
					<div className={classes.row}>
						<p>
							<label htmlFor="name">Your name</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleInputChange}
							/>
							{errors.name && (
								<span className={classes.span}>{errors.name}</span>
							)}
						</p>
						<p>
							<label htmlFor="email">Your email</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
							/>
							{errors.email && (
								<span className={classes.span}>{errors.email}</span>
							)}
						</p>
					</div>
					<p>
						<label htmlFor="title">Title</label>
						<input
							type="text"
							id="title"
							name="title"
							value={formData.title}
							onChange={handleInputChange}
						/>
						{errors.title && (
							<span className={classes.span}>{errors.title}</span>
						)}
					</p>
					<p>
						<label htmlFor="summary">Short Summary</label>
						<input
							type="text"
							id="summary"
							name="summary"
							value={formData.summary}
							onChange={handleInputChange}
						/>
						{errors.summary && (
							<span className={classes.span}>{errors.summary}</span>
						)}
					</p>
					<p>
						<label htmlFor="instructions">Instructions</label>
						<textarea
							id="instructions"
							name="instructions"
							rows="10"
							value={formData.instructions}
							onChange={handleInputChange}
						></textarea>
						{errors.instructions && (
							<span className={classes.span}>{errors.instructions}</span>
						)}
					</p>
					<ImagePicker
						label="your image"
						name="image"
						id="name"
						value={formData.image}
						onChange={handleImageChange}
						required
					/>
					{errors.image && <span className={classes.span}>{errors.image}</span>}
					<p className={classes.actions}>
						<button type="submit">Share Meal</button>
					</p>
				</form>
			</main>
		</>
	);
}
