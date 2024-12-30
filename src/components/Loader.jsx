import loaderGif from "../images/loading.gif"

const Loader = () => {

    return (
        <div className="loading">
            <div>
                <p>Loading...</p>
                <img src={loaderGif} alt="loading gif" />
            </div>
        </div>
    )
}

export default Loader;