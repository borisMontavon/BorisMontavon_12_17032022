import PropTypes from "prop-types";
import CountCard from "./countCard";

/**
 * Component for mapping all the counters data into {@link CountCard|&lt;CountCard /&gt;} child components.
 * 
 * Called from parent component {@link ProfilPage|&lt;ProfilPage /&gt;}.
 *
 * @component
 */

function CountCards({countData}) {
    const countCardsList = countData.map((item, index) =>
        <CountCard
            count={item.count}
            label={item.label}
            iconBg={item.iconBg}
            iconColor={item.iconColor}
            icon={item.icon}
            key={index}
        />
    );

    return (
        <div className="h-full flex flex-col justify-between">
            {countCardsList}
        </div>
    );
}

CountCards.propTypes = {
    /**
     * User's counters data
     */
    countData: PropTypes.array.isRequired
}

export default CountCards;
