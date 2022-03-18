import { useState, useEffect } from "react";
import toggleThemes from "../../services/themeService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function ThemeSwitch() {
    const [themeIcon, setThemeIcon] = useState(faSun);
    const [themeButtonTitle, setThemeButtonTitle] = useState("Passer en thème clair");

    useEffect(() => {
        const icon = toggleThemes();
        setThemeIcon(icon);

        const themeButton = document.getElementById("themeButton");

        themeButton.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            if (localStorage.theme === "light") {
                localStorage.theme = "dark";
                document.documentElement.classList.add("dark");
                setThemeIcon(faSun);
                setThemeButtonTitle("Passer en thème clair");
            } else {
                localStorage.theme = "light";
                document.documentElement.classList.remove("dark");
                setThemeIcon(faMoon);
                setThemeButtonTitle("Passer en thème sombre");
            }
        });
    }, []);

    return (
        <button id="themeButton" className="p-2 w-10 bg-cardDark rounded-md" title={themeButtonTitle}>
            <FontAwesomeIcon icon={themeIcon} className="text-white" />
        </button>
    );
}

export default ThemeSwitch;
