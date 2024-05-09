import React from "react";
import "./Card.scss";

export const Card = ({src}) => {
	return (
		<div className="card-container">
			<div className="img-container">
				<img src={src} alt="image" />
			</div>
			<h2>Lorem Ipsum</h2>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has beenthe
				industry's standard dummy text
			</p>
		</div>
	);
};
