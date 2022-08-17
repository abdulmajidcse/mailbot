import { Outlet } from "react-router-dom";
import AuthHeader from "../layouts/AuthHeader";
import AuthSidebar from "../layouts/AuthSidebar";
import AuthFooter from "./../layouts/AuthFooter";
const AuthGuardOutlet = () => {
    return (
        <>
            {/* Navbar */}
            <AuthHeader />
            {/* /.navbar */}
            {/* Main Sidebar Container */}
            <AuthSidebar />
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                <Outlet />
            </div>
            {/* /.content-wrapper */}
            <AuthFooter />
        </>
    );
};

export default AuthGuardOutlet;
