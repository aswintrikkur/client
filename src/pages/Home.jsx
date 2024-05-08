import React from "react";
import "./Home.scss";
import { Container } from "../components/Container/Container";

export const Home = () => {
	return (
		<Container>
			<div className="home-container">
				<div className="section1">
					<div className="content">
						<h3>Children's nursery</h3>
						<h1>Lorem Ipsum Is Simply Dummy text</h1>
					</div>
				</div>

				<div className="cloud-border">
					<img src="/images/cloud2.png" alt="cloud2" className="cloud2" />
				</div>

				<div className="section2">
					<img src="/images/cloud3.png" alt="cloud3" className="cloud3" />
					<img src="/images/cloud4.png" alt="cloud4" className="cloud4" />
					<img src="/images/bg-lines.png" alt="bg-lines" className="bg-lines" />
					<img src="/images/image-second.png" alt="" className="second-image" />
          <img src="/images/vector1.png" alt="vector1" className="vector1" />
					<div className="content">
						<h3>Children's nursery</h3>
						<h1>Lorem Ipsum Is Simply Dummy text</h1>
					</div>
				</div>
			</div>
		</Container>
	);
};
