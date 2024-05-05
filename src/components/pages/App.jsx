import '../../css/App.css';
// React Router Import
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NewActivity from '../pages/NewActivity';
import ActivityDetail from '../pages/ActivityDetail';
import Employees from '../pages/Employees';
import EmployeeNew from '../pages/EmployeeNew';
import EmployeeDetail from '../pages/EmployeeDetail';
import EmployeeDelete from '../pages/EmployeeDelete';
import Layout from '../layouts/Layout';


export default function app() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/home" element={<Home />} />
					<Route path="/new-activity" element={<NewActivity />} />
					<Route path="/activity-detail" element={<ActivityDetail />} />
					<Route path="/employees" element={<Employees />} />
					<Route path="/employee-new" element={<EmployeeNew />} />
					<Route path="/employee-detail/:id" element={<EmployeeDetail />} />
					<Route path="/employee-delete/:id" element={<EmployeeDelete />} />
				</Route>
                <Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}
