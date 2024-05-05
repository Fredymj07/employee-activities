import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function EmployeeNew() {

	return (
		<div className="container">
			<h4 className="mt-5">Crear nuevo empleado</h4>

			<Form className="mt-5">
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridActividad">
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							type="text"
							placeholder="Nombre completo"
						/>
					</Form.Group>
					<Form.Group as={Col} controlId="formGridActividad">
						<Form.Label>Dirección</Form.Label>
						<Form.Control
							type="text"
							placeholder="Calle 1 # 2 - 3"
						/>
					</Form.Group>
				</Row>
				
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridActividad">
						<Form.Label>Celular</Form.Label>
						<Form.Control
							type="text"
							placeholder="3124567890"
						/>
					</Form.Group>
					<Form.Group as={Col} controlId="formGridActividad">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="text"
							placeholder="usuario@dominio.com"

						/>
					</Form.Group>
				</Row>

				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridActividad">
						<Form.Label>Cargo</Form.Label>
						<Form.Control
							type="text"
						/>
					</Form.Group>
					<Form.Group as={Col} controlId="formGridFecha">
						<Form.Label>Fecha de contratación</Form.Label>
						<Form.Control
							type="date"
						/>
					</Form.Group>
				</Row>

				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridActividad">
						<Form.Label>Departamento</Form.Label>
						<Form.Control
							type="text"
						/>
					</Form.Group>
					<Form.Group as={Col} controlId="formGridFecha">
						<Form.Label>Salario</Form.Label>
						<Form.Control
							type="int"
						/>
					</Form.Group>
				</Row>

				<Button variant="primary" type="submit">
					Guardar
				</Button>
			</Form>
		</div>
	);
}
