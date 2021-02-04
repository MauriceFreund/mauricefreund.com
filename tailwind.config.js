module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                one: {
                    lt: "#EF6B81",
                    md: "#E83151",
                    dk: "#B4142F",
                },
                two: {
                    lt: "#0BC2FF",
                    md: "#007EA7",
                    dk: "#005A78",
                },
                three: {
                    lt: "#FFBF49",
                    md: "#FFA400",
                    dk: "#B67600",
                },
                neutral: {
                    lt: "#FFFFFF",
                    dk: "#242424",
                },
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["active"],
            textColor: ["active"],
        },
    },
    plugins: [],
};
