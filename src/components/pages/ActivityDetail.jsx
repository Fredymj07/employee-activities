import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function ActivityDetail() {
	const [data, setData] = React.useState("Esperando data...");

	const getData = async () => {
		try {
			fetch("http://localhost:3000/activity-detail")
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
			<h4 className="mt-5">Detalle de actividad</h4>

			<h4>{!data ? "Loading..." : data}</h4>

			<Card className="mt-5" style={{ width: "18rem" }}>
				<Card.Body>
					<Card.Title>Reunión Equipo</Card.Title>
					<Card.Text>
					Reunión semanal para revisar avances.
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>Fecha: 2024-03-25</ListGroup.Item>
					<ListGroup.Item>Hora: 10:00</ListGroup.Item>
				</ListGroup>
				<Card.Body>
					<Card.Link href="#">Anterior</Card.Link>
					<Card.Link href="#">Siguiente</Card.Link>
				</Card.Body>
			</Card>
		</div>
	);
}