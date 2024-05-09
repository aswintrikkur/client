import React from "react";
import "./Button.scss";

export const Button = ({ text }) => {
	return (
		<div className="button-container">
			<button> {text} </button>
		</div>
	);
};
