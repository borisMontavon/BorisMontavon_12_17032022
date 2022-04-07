import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Component for creating a card displaying a counter for a certain unit given in props.
 * 
 * Called from parent component {@link CountCards|&lt;CountCards /&gt;}.
 *
 * @component
 */

function CountCard({count, label, iconBg, iconColor, icon}) {
    return (
        <div className="flex items-center rounded-md bg-cardLight px-6 py-6">
            <span className={`${iconBg} h-16 w-16 rounded-md flex items-center justify-center`}>
                <FontAwesomeIcon icon={icon} className={iconColor} />
            </span>
            <div className="flex flex-col ml-8">
                <span className="font-bold text-xl text-gray">{count}</span>
                <span className="font-medium text-sm text-textMuted">{label}</span>
            </div>
        </div>
    );
}

CountCard.propTypes = {
    /**
     * Number in the unit given
     */
    count: PropTypes.string.isRequired,
    /**
     * Label of the unit
     */
    label: PropTypes.string.isRequired,
    /**
     * Background-color of the icon container
     */
    iconBg: PropTypes.string.isRequired,
    /**
     * Color of the icon
     */
    iconColor: PropTypes.string.isRequired,
    /**
     * Icon object (from {@link https://fontawesome.com/icons|Font Awesome})
     */
    icon: PropTypes.object.isRequired,
}

export default CountCard;
