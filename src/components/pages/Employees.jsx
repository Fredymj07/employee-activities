import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function Employees() {

	const [listEmployees, setListEmployees] = useState([]);

	useEffect(() => {
		
		async function fetchData() {
			const response = await fetch('http://localhost:3000/api/v1/employees');
			const data = await response.json();
			setListEmployees(data);
		}

		fetchData();

	}, []);

    return (
        <div className="container">
			<h4 className="mt-5">Lista de empleados</h4>

			<div style={{textAlign: 'right'}}>
				<Button variant='primary' href='/employee-new'>Agregar</Button>
			</div>

			<Table striped bordered hover className="mt-5">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Dirección</th>
						<th>Celular</th>
						<th>Email</th>
						<th>Cargo</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{
						listEmployees.map(employee => {
							return(
								<tr key={employee.id}>
									<td>{employee.name}</td>
									<td>{employee.address}</td>
									<td>{employee.phone}</td>
									<td>{employee.email}</td>
									<td>{employee.position}</td>
									<td>
										<a href={`/employee-detail/${employee.id}`}>
											<img style={{width:30, height:30}} src="/employees/detail.png" alt="Detalle" />
										</a>
										<a href={`/employee-delete/${employee.id}`}>
											<img style={{width:30, height:30}} src="/employees/delete.png" alt="Eliminar" />
										</a>
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</Table>
		</div>
    );
}

export default Employees;