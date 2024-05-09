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
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1961.7456698953079!2d76.27242632589285!3d10.461878466230623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7fa8243d5e6eb%3A0x9496e1214ccaebb5!2s!5e0!3m2!1sen!2sin!4v1698411259611!5m2!1sen!2sin"
						style={{
							width: "320px",
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
