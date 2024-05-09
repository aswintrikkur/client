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
				
				<a href="#home">Home</a>
				<a href="#about-us">About Us</a>
				<a href="#programs">Programs</a>
				<a href="#">Gallery</a>
				<a href="#">Careers</a>
				<a href="#contact-us">Contact Us</a>
			</div>
			<div className="lan">
				<p>Engilsh</p>
			</div>
		</div>
	);
};
