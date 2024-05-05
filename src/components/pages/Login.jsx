import "../../css/FormularioLogin.css";
import Form from "react-bootstrap/Form";

export default function Login() {

	return (
		<div className="container">

			<Form className="formulario-login">
				<h4 className="mt-5">Iniciar sesión</h4>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="usuario123@dominio.com" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Contraseña</Form.Label>
					<Form.Control type="password" placeholder="****" />
				</Form.Group>
				<a className="btn btn-primary" href="/home" type="submit">
					Ingresar
				</a>
			</Form>
		</div>
	);
}
