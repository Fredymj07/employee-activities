import "../../css/App.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}