import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Image } from "react-bootstrap";
import star from "../assets/star.svg";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
	const navigate = useNavigate();

	console.log(navigate);

	return (
		<Col md={3} className="">
			<Card
				style={{ width: 150, cursor: "pointer" }}
				border="light"
				onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
			>
				<Image width={150} height={150} src={device.img} />
				<div className="d-flex justify-content-between align-items-center text-black-50">
					<div>Samsung...</div>
					<div className="d-flex align-items-center pt-2">
						<div>{device.rating}</div>
						<Image width={18} height={18} src={star} className="ms-1" />
					</div>
				</div>
				<div>{device.name}</div>
			</Card>
		</Col>
	);
};

export default DeviceItem;
