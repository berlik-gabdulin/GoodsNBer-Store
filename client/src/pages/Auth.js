import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
	const location = useLocation();
	console.log(location);

	const isLogin = location.pathname === LOGIN_ROUTE;

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ height: window.innerHeight - 56 }}
		>
			<Card className="p-5" style={{ width: 600 }}>
				<h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
				<Form className="d-flex flex-column">
					<Form.Control
						placeholder="Введите ваш e-mail..."
						className="mt-3"
					></Form.Control>
					<Form.Control
						placeholder="Введите ваш пароль..."
						className="mt-3"
						type="password"
					></Form.Control>
					<div className="d-flex justify-content-between align-items-center mt-3">
						{isLogin ? (
							<div>
								Нет аккаунта?{" "}
								<NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
							</div>
						) : (
							<div>
								Уже есть аккаунт?{" "}
								<NavLink to={LOGIN_ROUTE}>Авторизуйтесь</NavLink>
							</div>
						)}
						<Button variant="outline-dark" className="ms-auto">
							{isLogin ? "Войти" : "Загистрироваться"}
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	);
};

export default Auth;
