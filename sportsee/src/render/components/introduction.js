import PropTypes from "prop-types";

function Introduction({firstNameData}) {
    return (
        <>
            <h1 className="mb-6">
                <span className="font-medium text-white text-5xl">Bonjour </span>
                <span className="font-medium text-primary text-5xl">{firstNameData.firstName}</span>
            </h1>
            <p className="font-normal text-white text-lg">Show me what you got !</p>
        </>
    );
}

Introduction.propTypes = {
    firstNameData: PropTypes.object
}

export default Introduction;
