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
            vermilionOpac: "var(--vermilion-opac)",
            blue: "var(--blue)",
            blueOpac: "var(--blue-opac)",
            yellow: "var(--yellow)",
            yellowOpac: "var(--yellow-opac)",
            pink: "var(--pink)",
            pinkOpac: "var(--pink-opac)",
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
