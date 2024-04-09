import React, { useEffect } from "react";
import "../../css/FormularioLogin.css";
import Form from "react-bootstrap/Form";

export default function Login() {
	const [data, setData] = React.useState("Esperando data...");

	const getData = async () => {
		try {
			fetch("http://localhost:3000/login")
				.then((res) => res.json())
				.then((data) => setData(data.message));
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		(async () => {
			await getData();
		})();
	}, []);

	return (
		<div className="container">
			
			<h4>{!data ? "Loading..." : data}</h4>

			<Form className="formulario-login">
				<h4 className="mt-5">Iniciar sesión</h4>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="usuario123@dominio.com" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Contraseña</Form.Label>
					<Form.Control type="password" placeholder="****" />
				</Form.Group>
				<a className="btn btn-primary" href="/home" type="submit">
					Ingresar
				</a>
			</Form>
		</div>
	);
}
