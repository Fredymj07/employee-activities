import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const header = () => {
	return (
		<Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="/home">Home</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/new-activity">Crear actividad</Nav.Link>
						<Nav.Link href="/activity-detail">Detalle de actividad</Nav.Link>
						<Nav.Link href="/user-profile">Perfil de usuario</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default header;
