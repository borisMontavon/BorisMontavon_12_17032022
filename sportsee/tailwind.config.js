module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            roboto: ["Roboto", "sans-serif"]
        },
        fontSize: {
            // "xs": ".625rem"
        },
        colors: {
            transparent: "transparent",
            white: "var(--white)",
            black: "var(--black)",
            textMuted: "var(--text-muted)",

            primary: {
                DEFAULT: "var(--primary)",
                opac: "var(--primary-opac)"
            },
            vermilion: "var(--vermilion)", // Calories icon bg
            blue: "var(--blue)", // Proteines icon bg
            yellow: "var(--yellow)", // Glucides icon bg
            pink: "var(--pink)", // Lipides icon bg
            navBlack: "var(--nav-black)",

            // Light mode
            cardLight: "var(--card-light)",

            // Dark mode
            bgDark: "var(--bg-dark)",
            cardDark: "var(--card-dark)"
        },
        extend: {}
    },
    plugins: []
};
