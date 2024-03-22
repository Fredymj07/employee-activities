import ReactDOM from "react-dom/client";
// React Router Import
import { BrowserRouter as Router } from "react-router-dom";
import App from "../pages/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <App />
    </Router>
);
