import { Routes, Route } from "react-router-dom";
import Blank from "../pages/Blank";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AuthGuardOutlet from "../components/guards/AuthGuardOutlet";

const WebRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AuthGuardOutlet />}>
                    <Route index element={<Home />} />
                    <Route path="blank" element={<Blank />} />
                </Route>

                {/* Not Found /404 */}
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default WebRoute;
