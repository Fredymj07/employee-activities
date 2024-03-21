/* Code Written By: Fredy Montaña */
/* Date: 21 Marzo 2019 */


import "../../App.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
// React Router Import
import { Route, Routes } from "react-router-dom";
// Pages Import
import Home from "../pages/Home";
import NewActivity from "../pages/NewActivity";
import ActivityDetail from "../pages/ActivityDetail";
import UserProfile from "../pages/UserProfile";
import NotFoundPage from "../pages/NotFoundPage";

const app = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/new-activity" element={<NewActivity />} />
                <Route path="/activity-detail" element={<ActivityDetail />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/not-found-page" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default app;
