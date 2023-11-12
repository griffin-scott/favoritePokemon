import pokeball_spinning from "../images/pokeball_spinning.gif";

const LoadingGif = () => {
    return (
        <div className="Loading h-100 d-flex flex-column align-items-center mb-5">
            <div className="col mt-5 pt-5">
                <img src={pokeball_spinning} alt="" height="200px" width="200px" />
                <h1 className="lead fw-bold text-center text-white">Loading...</h1>
            </div>
        </div>
    );
};

export default LoadingGif;
