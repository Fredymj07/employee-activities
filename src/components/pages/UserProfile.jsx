import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function UserProfile() {
    return (
        <div className="container">
			<h4 className="mt-5">Perfil de usuario</h4>
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