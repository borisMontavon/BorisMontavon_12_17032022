import PropTypes from "prop-types";
import CountCard from "./countCard";

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
        <>
            {countCardsList}
        </>
    );
}

CountCards.propTypes = {
    countData: PropTypes.array
}

export default CountCards;
