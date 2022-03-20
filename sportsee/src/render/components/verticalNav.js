import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBiking, faPersonSwimming, faDumbbell, faPersonSkiing } from "@fortawesome/free-solid-svg-icons";

function VerticalNav() {
    const sports = [
        {"sport": faPersonSkiing, "title": "Ski/snow"},
        {"sport": faPersonSwimming, "title": "Natation"},
        {"sport": faPersonBiking, "title": "Vélo"},
        {"sport": faDumbbell, "title": "Fitness"}
    ];

    const sportsIcons = sports.map((icon, index) =>
        <span
            className="rounded-md bg-white flex justify-center items-center w-16 h-16 mb-4 cursor-pointer group transition-all hover:bg-primary"
            title={icon.title}
            key={index}
        >
            <FontAwesomeIcon icon={icon.sport} className="text-primary text-3xl transition-all group-hover:text-white" />
        </span>
    );

    return (
        <nav className="flex flex-col items-center justify-around h-vertNav w-28 bg-black fixed left-0">
            <div>
                {sportsIcons}
            </div>
            <div className="flex flex-col items-center">
                <p className="text-white text-xs font-medium -rotate-90 whitespace-nowrap">© SportSee 2022</p>
            </div>
        </nav>
    );
}

export default VerticalNav;
