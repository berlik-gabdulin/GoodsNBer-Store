import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
	const { device } = useContext(Context);

	return (
		<Row className="d-flex pt-3">
			{device.devices.map((device) => {
				return <DeviceItem device={device} key={device.id} />;
			})}
		</Row>
	);
};

export default DeviceList;
