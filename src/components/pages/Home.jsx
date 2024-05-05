import Table from "react-bootstrap/Table";

export default function Home() {

	return (
		<div className="container">
			<h4 className="mt-5">Lista de actividades</h4>

			<Table striped bordered hover className="mt-5">
				<thead>
					<tr>
						<th>ID</th>
						<th>Actividad</th>
						<th>Fecha</th>
						<th>Hora</th>
						<th>Descripción</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Reunión Equipo</td>
						<td>2024-03-25</td>
						<td>10:00</td>
						<td>Reunión semanal para revisar avances.</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Entrevista Candidato</td>
						<td>2024-03-27</td>
						<td>14:30</td>
						<td>
							Entrevista con el candidato para el puesto de
							desarrollo web.
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Capacitación</td>
						<td>2024-03-30</td>
						<td>09:00</td>
						<td>
							Sesión de capacitación sobre nuevas herramientas de
							diseño.
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}
