import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CountCard({count, label, iconBg, iconColor, icon}) {
    return (
        <div className="flex items-center rounded-md bg-cardDark px-6 py-6">
            <span className={`${iconBg} h-16 w-16 rounded-md flex items-center justify-center`}>
                <FontAwesomeIcon icon={icon} className={iconColor} />
            </span>
            <div className="flex flex-col ml-8">
                <span className="font-bold text-xl text-white">{count}</span>
                <span className="font-medium text-sm text-textMuted">{label}</span>
            </div>
        </div>
    );
}

CountCard.propTypes = {
    count: PropTypes.string,
    label: PropTypes.string
}

export default CountCard;
