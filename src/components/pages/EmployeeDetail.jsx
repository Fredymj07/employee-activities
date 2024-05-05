import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function EmployeeDetail() {
	const id = useParams().id;
	const [dato, detail] = useState([]);

	useEffect(() => {

		async function dataEmployee() {
			const response = await fetch(`http://localhost:3000/api/v1/` + Number(id));
			const data = await response.json();
			console.log(data);
			detail(data);
		}

		dataEmployee();

	}, [id]);

	return (
		<div className="container">
			<h4 className="mt-5">Detalle del empleado</h4>

			<Card className="mt-5" style={{ width: "18rem" }}>
				<Card.Body>
					<Card.Title>{}</Card.Title>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>Dirección: {}</ListGroup.Item>
					<ListGroup.Item>Celular:  {}</ListGroup.Item>
					<ListGroup.Item>Email:  {}</ListGroup.Item>
					<ListGroup.Item>Cargo:  {}</ListGroup.Item>
					<ListGroup.Item>Fecha de contrato:  {}</ListGroup.Item>
					<ListGroup.Item>Departamento:  {}</ListGroup.Item>
					<ListGroup.Item>Salario:  ${}</ListGroup.Item>
				</ListGroup>
			</Card>
		</div>
	);
}