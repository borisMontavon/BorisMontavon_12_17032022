import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDrowning } from "@fortawesome/free-solid-svg-icons";

function ErrorPage({title, content}) {
    return (
        <div className="pr-24 pl-52 pt-36 pb-12 flex flex-col justify-center items-center">
            <div className="my-16 flex flex-col justify-center items-center">
                <span className="text-7xl text-primary font-bold">{title}</span>
                <FontAwesomeIcon icon={faPersonDrowning} className="text-7xl text-primary mt-4" />
            </div>
            <span className="text-2xl text-white font-normal my-8">{content}</span>
        </div>
    );
}

ErrorPage.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
}

export default ErrorPage;
