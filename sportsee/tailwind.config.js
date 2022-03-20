module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            roboto: ["Roboto", "sans-serif"]
        },
        colors: {
            transparent: "transparent",
            white: "var(--white)",
            black: "var(--black)",
            gray: "var(--gray)",
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

            bgDark: "var(--bg-dark)",
            cardDark: "var(--card-dark)",
            cardLight: "var(--card-light)"
        },
        extend: {
            height: {
                "vertNav": "calc(100vh - 6rem)"
            }
        }
    },
    plugins: []
};
