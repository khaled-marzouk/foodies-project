"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name, onChange }) {
	const [pickedImage, setPickedImage] = useState();
	const imageInput = useRef();
	function handlePickClick() {
		imageInput.current.click();
	}
	function handleImagePicker(event) {
		const file = event.target.files[0];
		if (!file) {
			setPickedImage(null);
			// onChange(null);
			return;
		}
		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
		// onChange(file);
	}
	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!pickedImage && <p> no image picked yet . </p>}
					{pickedImage && (
						<Image
							src={pickedImage}
							fill
							alt="the image selected by the user"
							name={name}
						/>
					)}
				</div>
				<input
					className={classes.input}
					type="file"
					id={name}
					accept="image/png, image/jpg"
					ref={imageInput}
					name={name}
					onChange={handleImagePicker}
					required
				/>
				<button
					className={classes.button}
					type="button"
					onClick={handlePickClick}
				>
					Pick an image
				</button>
			</div>
		</div>
	);
}
