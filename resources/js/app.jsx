import "./bootstrap";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import WebRoute from "./Routes/WebRoute";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <>
        <BrowserRouter>
            <WebRoute />
        </BrowserRouter>
    </>
);
