import React from "react";
import baseStyled, {
    ThemeContext,
    ThemedBaseStyledInterface,
} from "styled-components";

const theme = {
    colors: {
        square: {
            ally: {
                circle: "#61C6FF",
                background: {
                    light: "rgba(97, 198, 255, 0.2)",
                    medium: "rgba(97, 198, 255, 0.4)",
                },
            },
            enemy: {
                circle: "rgba(53, 56, 57, 0.5)",
                background: {
                    light: "rgba(157, 157, 157, 0.2)",
                    medium: "rgba(157, 157, 157, 0.4)",
                },
            },
            text: {
                position: "rgba(113, 124, 150, 0.7)",
            },
        },
        danger: {
            main: "#FF0055",
        },
        lobby: {
            backdrop: {
                medium: "#7B61FF",
                shadedLight: "#F8F7FF",
                light: "#FFFFFF",
            },
            button: {
                background: {
                    primary: "#6D51FD",
                    secondary: "#F0EDFF",
                    mediumAlt: "#947EFF",
                },
                text: {
                    primary: "#FFFFFF",
                    secondary: "#6D51FD",
                },
            },
            slider: {
                background: {
                    dark: "#302B4A",
                    light: "#FFFFFF",
                },
                text: {
                    selected: "#7b61ff",
                    default: "#D1CCEA",
                },
            },
            input: {
                background: {
                    light: "#F5F3FC",
                },
                text: {
                    placeholder: "#bcb7e2",
                },
            },
            info: {
                heading: "#1E088E",
                label: "#9591a4",
                guidelines: "#b0aace",
            },
            credits: {
                light: "#9a86ff",
                medium: "#C0B4F9",
            },
        },
    },
    breakPoints: {
        mobile: 860,
        tablet: 1200,
        desktop: 1920,
        widescreen: 2560,
    },
};

export type Theme = typeof theme;

const useTheme = (): Theme => {
    return React.useContext(ThemeContext);
};

export { theme, useTheme };

const styled: ThemedBaseStyledInterface<Theme> = baseStyled;

export default styled;
