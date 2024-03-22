import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function UserProfile() {
    return (
        <div className="container">
			<h4 className="mt-5">Perfil de usuario</h4>
			<Card className="mt-5" style={{ width: "18rem" }}>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>Cras justo odio</ListGroup.Item>
					<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
					<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
				</ListGroup>
				<Card.Body>
					<Card.Link href="#">Card Link</Card.Link>
					<Card.Link href="#">Another Link</Card.Link>
				</Card.Body>
			</Card>
		</div>
    );
}
