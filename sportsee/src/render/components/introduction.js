import PropTypes from "prop-types";

/**
 * Component for rendering the first name of the user and a motivational quote.
 * 
 * Called from parent component {@link ProfilPage|&lt;ProfilPage /&gt;}.
 *
 * @component
 */

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
    /**
     * User's first name
     */
    firstNameData: PropTypes.object.isRequired
}

export default Introduction;
