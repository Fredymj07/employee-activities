import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function NewActivity() {
	const [data, setData] = React.useState("Esperando data...");

	const getData = async () => {
		try {
			fetch("http://localhost:3000/new-activity")
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
			<h4 className="mt-5">Crear nueva actividad</h4>

			<h4>{!data ? "Loading..." : data}</h4>

			<Form className="mt-5">
				<Form.Group as={Col} controlId="formGridActividad">
					<Form.Label>Actividad</Form.Label>
					<Form.Control
						type="text"
						placeholder="Nombre actividad a realizar"
					/>
				</Form.Group>
				<br />
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridFecha">
						<Form.Label>Fecha</Form.Label>
						<Form.Control
							type="date"
							placeholder="Fecha actividad yyyy-MM-dd"
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridHora">
						<Form.Label>Hora</Form.Label>
						<Form.Control
							type="time"
							placeholder="Hora actividad hh:mm"
						/>
					</Form.Group>
				</Row>

				<Form.Group className="mb-3" controlId="formGridDescripcion">
					<Form.Label>Descripción</Form.Label>
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
						placeholder="Resumen actividad programada"></textarea>
				</Form.Group>

				<Form.Group className="mb-3" id="formGridCheckbox">
					<Form.Check type="checkbox" label="Estoy de Acuerdo" />
				</Form.Group>
				<br />
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}
