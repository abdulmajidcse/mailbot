import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <>
            <p className="login-box-msg">
                You forgot your password? Here you can easily reset password.
            </p>
            <form>
                <div className="input-group mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Password Reset Link
                        </button>
                    </div>
                    {/* /.col */}
                </div>
            </form>
            <p className="mt-3 mb-1">
                <Link to={"/login"}>Back to login</Link>
            </p>
            <p className="mb-0">
                <Link to={"/register"} className="text-center">
                    Register a new account
                </Link>
            </p>
        </>
    );
};

export default ForgotPassword;
