import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "./../pages/Home";

const WebRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* Not Found /404 */}
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default WebRoute;
