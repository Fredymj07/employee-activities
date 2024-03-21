import Table from "react-bootstrap/Table";

const home = () => {
	return (
		<div className="container">
			<h4 className="mt-5">Lista de actividades</h4>

			<Table striped bordered hover className="mt-5">
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default home;
