import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CountCard({count, label, iconBg, iconColor, icon}) {
    return (
        <div className="flex justify-between items-center rounded-md bg-cardDark p-5">
            <span className={`${iconBg} px-5 py-3 rounded-md`}>
                <FontAwesomeIcon icon={icon} className={iconColor} />
            </span>
            <div className="flex flex-col">
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
