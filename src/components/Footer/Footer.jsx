import React from "react";
import "./Footer.scss";

export const Footer = () => {
	return (
		<div className="footer-contaier">
			<div className="row1">
				<div className="col1">
					<img src="/images/logo.png" alt="logo" />
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
					</p>
					<img src="/icons/icon-insta.png" alt="insta" />
					<img src="/icons/icon-wtsapp.png" alt="wtsapp" />
				</div>
				<div className="col2">
					<h3>Contact Us</h3>
					<div>
						<img src="/icons/icon1.png" alt="icon1" />
						<h4>
							City, Country <br /> Building 00 <br /> Street 000
						</h4>
					</div>
					<div>
						<img src="/icons/icon1.png" alt="icon1" />
						<h4> 00000 00000</h4>
					</div>
					<div>
						<img src="/icons/icon1.png" alt="icon1" />
						<h4>dummymail.com</h4>
					</div>
				</div>
				<div className="col3">
					<h3>Find Us On</h3>
					<iframe
						src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
						style={{
							width: "300px",
							height: "140px",
							border: "0",
							allowFullScreen: "",
							loading: "lazy",
							color: "black",
							referrerPolicy: "no-referrer-when-downgrade",
						}}
					></iframe>
				</div>
			</div>
			<br />
			<hr />
			<div className="row2">
				<h4>Copyright © 2024. All Rights Reserved. Developed by Ginger Technologies.</h4>
			</div>
		</div>
	);
};
