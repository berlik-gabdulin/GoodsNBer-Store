import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Context } from "..";
import { SHOP_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
	const { user } = useContext(Context);
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
					Navbar
				</NavLink>
				<Nav className="ms-auto" style={{ color: "white" }}>
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
				{user.isAuth ? (
					<Nav className="ms-3" style={{ color: "white" }}>
						<Button variant={"outline-light"}>Админ панель</Button>
						<Button className="ms-2" onClick={() => user.setIsAuth(false)}>
							Выйти
						</Button>
					</Nav>
				) : (
					<Nav className="ms-3" style={{ color: "white" }}>
						<Button
							variant={"outline-light"}
							onClick={() => user.setIsAuth(true)}
						>
							Авторизация
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	);
});

export default NavBar;
