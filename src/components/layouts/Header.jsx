import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function header() {
	return (
		<Navbar
			expand="lg"
			bg="dark"
			data-bs-theme="dark"
			className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="/home">Home</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/new-activity">
							Crear actividad
						</Nav.Link>
						<Nav.Link href="/activity-detail">
							Detalle de actividad
						</Nav.Link>
						<Nav.Link href="/employees">
							Empleados
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Form inline>
					<Row>
						<Col xs="auto">
							<a className="mr-sm-2 btn btn-danger" href="/login" type="submit">Cerrar sesión</a>
						</Col>
					</Row>
				</Form>
			</Container>
		</Navbar>
	);
}
