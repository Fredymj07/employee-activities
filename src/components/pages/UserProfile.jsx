import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function UserProfile() {
	const [data, setData] = React.useState("Esperando data...");

	const getData = async () => {
		try {
			fetch("http://localhost:3000/user-profile")
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
			<h4 className="mt-5">Perfil de usuario</h4>

			<h4>{!data ? "Loading..." : data}</h4>

			<Card className="mt-5" style={{ width: "18rem" }}>
				<Card.Body>
					<Card.Title>Usuario de Prueba</Card.Title>
					<Card.Text>
						Usuario para realizar pruebas iniciales de la App de actividades de empleado.
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>Correo: usuario123@dominio.com</ListGroup.Item>
					<ListGroup.Item>Password: ********</ListGroup.Item>
					<ListGroup.Item>Tipo: pruebas</ListGroup.Item>
				</ListGroup>
				<Card.Body>
					<Card.Link href="#">Anterior</Card.Link>
					<Card.Link href="#">Siguiente</Card.Link>
				</Card.Body>
			</Card>
		</div>
    );
}