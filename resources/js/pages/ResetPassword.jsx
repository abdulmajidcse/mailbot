import { Link, useParams, useSearchParams } from "react-router-dom";

const ResetPassword = () => {
    let { token } = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <>
            <p className="login-box-msg">
                You are only one step a way from your new password, recover your
                password now.
            </p>
            <form>
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
                <div className="input-group mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-lock" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Change password
                        </button>
                    </div>
                    {/* /.col */}
                </div>
            </form>
            <p className="mt-3 mb-1">
                <Link to={"/login"}>Back to login</Link>
            </p>
        </>
    );
};

export default ResetPassword;
