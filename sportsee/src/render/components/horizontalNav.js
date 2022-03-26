import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

function HorizontalNav() {
    const links = [
        "Accueil",
        "Profil",
        "Réglage",
        "Communauté"
    ];

    const navLinks = links.map((link, index) =>
        <li
            className="text-white text-2xl font-medium inline cursor-pointer transition-all hover:text-primary"
            key={index}
        >
            {link}
        </li>
    );

    return (
        <nav className="flex justify-between items-center h-24 bg-black w-full fixed top-0 z-10">
            <Link to="/">
                <img
                    src={logo}
                    alt="Logo SportSee"
                    className="h-14 w-auto px-8"
                />
            </Link>
            <ul className="flex justify-between px-20 w-9/12">
                {navLinks}
            </ul>
        </nav>
    );
}

export default HorizontalNav;
