import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function toggleThemes() {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
        
        return faSun;
    } else {
        document.documentElement.classList.remove("dark");
        
        return faMoon;
    }
}
