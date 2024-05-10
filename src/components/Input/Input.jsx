import React from "react";
import "./Input.scss";

export const Input = ({ type, placeholder }) => {
	return (
		<div className="input-container">
			{type == "text-area" ? (
				<textarea defaultValue={placeholder} ></textarea>
			) : (
				<input type={type} placeholder={placeholder} />
			)}
		</div>
	);
};
