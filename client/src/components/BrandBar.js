import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Row, Card } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
	const { device } = useContext(Context);

	return (
		<Row className="">
			{device.brands.map((brand) => {
				return (
					<Card
						style={{
							cursor: "pointer",
							width: "auto",
							color: brand.id === device.selectedBrand.id ? "white" : "#333",
						}}
						bg={brand.id === device.selectedBrand.id ? "primary" : "white"}
						onClick={() => device.setSelectedBrand(brand)}
						className="p-2 d-inline ms-2 mb-2"
						key={brand.id}
					>
						{brand.name}
					</Card>
				);
			})}
		</Row>
	);
});

export default BrandBar;
