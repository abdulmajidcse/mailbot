import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className="register-page">
                <div className="error-page">
                    <h2 className="headline text-warning">404</h2>
                    <div className="error-content">
                        <h3>
                            <i className="fas fa-exclamation-triangle text-warning" />{" "}
                            Oops! Page not found.
                        </h3>
                        <p className="text-md-left text-center">
                            We could not find the page you were looking for.
                            Meanwhile, you may{" "}
                            <Link to={"/"}>return to home</Link>.
                        </p>
                    </div>
                    {/* /.error-content */}
                </div>
            </div>
        </>
    );
};

export default NotFound;
