import "../../css/App.css";
// React Router Import
import { Route, Routes } from "react-router-dom";
// Pages Import
import Home from "../pages/Home";
import NewActivity from "../pages/NewActivity";
import SearchActivity from "../pages/SearchActivity";
import ActivityDetail from "../pages/ActivityDetail";
import UserProfile from "../pages/UserProfile";
import Layout from "../layouts/Layout";
import Login from "../pages/Login";

export default function app() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/home" element={<Home />} />
					<Route path="/new-activity" element={<NewActivity />} />
					<Route path="/search-activity" element={<SearchActivity />} />
					<Route path="/activity-detail" element={<ActivityDetail />} />
					<Route path="/user-profile" element={<UserProfile />} />
				</Route>
                <Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}