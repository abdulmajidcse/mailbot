import { Link } from "react-router-dom";

const AuthFooter = () => {
    return (
        <>
            <footer className="main-footer">
                <strong>
                    Copyright © 2022{" "}
                    <Link to={"/"}>{import.meta.env.VITE_APP_NAME}</Link>.
                </strong>
                All rights reserved.
                <div className="float-right d-none d-sm-inline-block">
                    <b> Developed By </b>
                    <a
                        href="https://linkedin.com/in/abdulmajidcse"
                        target="_blank"
                    >
                        Abdul Majid
                    </a>
                </div>
            </footer>
        </>
    );
};

export default AuthFooter;
