import React from "react";
import "./Header.scss";

export const Header = () => {
	return (
		<div className="header-container">
			<img className="cloud1" src="/images/cloud1.png" alt="cloud1" />
				<div className="logo">
					<img src="/images/logo.png" alt="logo" />
				</div>
				<div className="navbar">
					<p>Home</p>
					<p>About Us</p>
					<p>Programs</p>
					<p>Gallery</p>
					<p>Careers</p>
					<p>Contact Us</p>
				</div>
				<div className="lan">
					<p>Engilsh</p>
				</div>
		</div>
	);
};
