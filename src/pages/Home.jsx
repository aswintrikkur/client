import React from "react";
import "./Home.scss";
import { Container } from "../components/Container/Container";
import { Card } from "../components/Card/Card";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";

export const Home = () => {
	return (
		<Container>
			<div className="home-container">
				{/* ------------------- section1 / Home ---------------- */}
				<section className="home" id="home">
					<div className="content">
						<h3>Children's nursery</h3>
						<h1>Lorem Ipsum Is Simply Dummy text</h1>
					</div>
					<img src="/images/cloud2.png" alt="cloud2" className="cloud2" />
				</section>

				{/* ------------------- section2 / About us ---------------- */}
				<section className="about-us" id="about-us">
					<img src="/images/cloud3.png" alt="cloud3" className="cloud3" />
					<img src="/images/cloud4.png" alt="cloud4" className="cloud4" />
					<img src="/images/bg-lines.png" alt="bg-lines" className="bg-lines" />
					<img src="/images/vector1.png" alt="vector1" className="vector1" />
					<img src="/images/image-second.png" alt="" className="second-image" />
					<div className="content">
						<img src="/images/vector2.png" alt="vector2" className="vector2" />
						<h4>About Us</h4>
						<h1>Lorem Ipsum Is Simply Dummy text</h1>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has
							beenthe industry's standard dummy text ever since the1500s, when an unkn own printer took a
							galley oftype and scrambled it to make a type specimen book
						</p>
					</div>
				</section>

				{/* ------------------- section3 / why choose us ---------------- */}
				<section className="why-choose-us">
					<img src="/images/bg-shade1.png" alt="bg-shade" className="bg-shade1" />
					<img src="/images/cloud-md-right.png" alt="cloud-right" className="cloud-right" />
					<img src="/images/cloud-lg-left.png" alt="cloud-left" className="cloud-left" />
					<img src="/images/child-vector1.png" alt="child-vector1" className="child-vector1" />
					<img src="/images/child-vector2.png" alt="child-vector2" className="child-vector2" />
					<img src="/images/image-third.png" alt="image-third" className="image-third" />
					<div className="content">
						<h4>Why Choose Us</h4>
						<h1>Lorem Ipsum Is Simply Dummy text</h1>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has
							beenthe industry's standard dummy text ever since the1500s, when an unkn own printer took a
							galley oftype and scrambled it to make a type specimen book
						</p>
					</div>
				</section>

				{/* ------------------- section4 / Programs ---------------- */}
				<section className="programs" id="programs">
					<h1>Programs</h1>
					<div className="cards-container">
						<Card src="/images/program1.png" />
						<Card src="/images/program2.png" />
						<Card src="/images/program3.png" />
					</div>
					<Button text="View All" />
					<img src="/images/cloud-lg-right.png" alt="cloud-right" className="cloud-lg-right" />
					<img src="/images/vector-line-plane.png" alt="vector-line-plane" className="vector-line-plane" />
				</section>

				{/* ------------------- section5 / get in touch  ---------------- */}
				<section className="get-in-touch" id="contact-us">
					<h1>Get In Touch</h1>

					<div className="content">
						<div className="col1">
							<h3>Connect With Us</h3>
							<div className="row1 row">
								<img src="/icons/icon1.png" alt="" />
								<h4>
									Location:
									<span>
										{" "}
										City, Country <br />
										Building 00 <br />
										Street 000
									</span>
								</h4>
							</div>
							<div className="row2 row">
								<img src="/icons/icon2.png" alt="" />
								<h4>
									Call Us: <span>000000 000000</span>
								</h4>
							</div>
							<div className="row3 row">
								<img src="/icons/icon3.png" alt="" />
								<h4>
									E-mail Us: <span>dummymail.com</span>
								</h4>
							</div>

							<h3>Working Hours</h3>
							<span>8:30 am - 3:30 pm</span>
							<p>Sunday were closed</p>
						</div>
						<div className="col2">
							<div className="row1 row">
								<Input type="text" placeholder="Full Name" />
								<Input type="email" placeholder="E-mail Adress" />
							</div>
							<div className="row2 row">
								<Input type="number" placeholder="Phone Number" />
								<Input type="text" placeholder="Subject" />
							</div>
							<div className="row3 row">
								<Input type="text-area" placeholder="Write Message" />
							</div>
							<Button text="Submit" />
						</div>
					</div>

					<h1 className="contact-us">Contact Us</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has <br />{" "}
						beenthe industry's standard dummy text ever since the1500s
					</p>
					<Button text="Contact Us" />
				</section>
			</div>
		</Container>
	);
};
