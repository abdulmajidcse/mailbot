import { Outlet } from "react-router-dom";

const GuestGuardOutlet = () => {
    return (
        <>
            <div className="register-page">
                <div className="register-box">
                    <div
                        className="register-logo"
                        style={{ color: "#495057", cursor: "pointer" }}
                    >
                        <b>{import.meta.env.VITE_APP_NAME}</b>
                    </div>
                    <div className="card">
                        <div className="card-body register-card-body">
                            <Outlet />
                        </div>
                        {/* /.form-box */}
                    </div>
                    {/* /.card */}
                </div>
                {/* /.register-box */}
            </div>
        </>
    );
};

export default GuestGuardOutlet;
