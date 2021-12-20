import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";

const DevicePage = () => {
	console.log(bigStar);
	const device = {
		id: 1,
		name: "iPhone 13 Pro",
		price: 1500,
		rating: 0,
		img: "https://www.technodom.kz/media/catalog/product/cache/79d62b5a17d20b122cb8cbf050cc7241/3/d/3db3d7602fc2500df2005ca1f5933263e78c8fa6_228946_1.jpg",
		createdAt: "2021-11-18T17:37:04.878Z",
		updatedAt: "2021-11-18T17:37:04.878Z",
		brandId: 2,
		typeId: 3,
	};

	return (
		<Container className="d-flex pt-3">
			<Col md={4}>
				<Image width={300} height={300} src={device.img} />
			</Col>
			<Col md={4}>
				<Row>
					<h2>{device.name}</h2>
					<div
						className="d-flex align-items-center justify-content-center"
						style={{
							background: `url(${bigStar}) no-repeat center center`,
							backgroundSize: "contain",
							width: 240,
							height: 240,
						}}
					>
						{device.rating}
					</div>
				</Row>
			</Col>
			<Col md={4}></Col>
		</Container>
	);
};

export default DevicePage;
