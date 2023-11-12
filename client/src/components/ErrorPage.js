import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const nav = useNavigate()
    const navHome = () => {
        nav('/')
    }
    return (
        <div className="ErrorPage h-100 d-flex justify-content-center">
            <div className="col-10 d-flex flex-column align-items-center">
                <h1 className="display-3 text-center text-white">404 Page Not Found</h1>
                <button onClick={navHome} href="#" className="btn btn-primary btn-hover col-3">Return Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;
