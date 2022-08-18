import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <p className="login-box-msg">Login to your account</p>
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
                <div className="input-group mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-lock" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="icheck-primary">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember Me</label>
                        </div>
                    </div>
                    {/* /.col */}
                    <div className="col-md-4">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Login
                        </button>
                    </div>
                    {/* /.col */}
                </div>
            </form>
            <p className="mb-1">
                <Link to={"/forgot-password"}>I forgot my password</Link>
            </p>
            <p className="mb-0">
                <Link to={"/register"} className="text-center">
                    Register a new account
                </Link>
            </p>
        </>
    );
};

export default Login;
