/* Code Written By: Fredy Montaña */
/* Date: 21 Marzo 2019 */


import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const header = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
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
