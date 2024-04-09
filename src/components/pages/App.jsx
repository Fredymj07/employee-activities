import '../../css/App.css';
// React Router Import
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NewActivity from '../pages/NewActivity';
import ActivityDetail from '../pages/ActivityDetail';
import UserProfile from '../pages/UserProfile';
import Layout from '../layouts/Layout';


export default function app() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/home" element={<Home />} />
					<Route path="/new-activity" element={<NewActivity />} />
					<Route path="/activity-detail" element={<ActivityDetail />} />
					<Route path="/user-profile" element={<UserProfile />} />
				</Route>
                <Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}
