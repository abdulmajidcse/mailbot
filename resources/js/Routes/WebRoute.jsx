import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AuthGuardOutlet from "../components/guards/AuthGuardOutlet";
import GuestGuardOutlet from "../components/guards/GuestGuardOutlet";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

const WebRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AuthGuardOutlet />}>
                    <Route index element={<Home />} />
                </Route>

                <Route path="/" element={<GuestGuardOutlet />}>
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route
                        path="forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route path="reset-password/:token" element={<ResetPassword />} />
                </Route>

                {/* Not Found /404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default WebRoute;
