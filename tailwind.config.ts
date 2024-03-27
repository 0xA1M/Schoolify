import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "80v": "80vh",
        "20v": "20vh",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#000000",
            primary: {
              50: "#F0F5FF",
              100: "#D9E6FD",
              200: "#B4CBFC",
              300: "#8DACF6",
              400: "#6E91EC",
              500: "#4169E1",
              600: "#2F50C1",
              700: "#203AA2",
              800: "#142782",
              900: "#0C1A6C",
              foreground: "#FFFFFF",
              DEFAULT: "#4169E1",
            },
            secondary: {
              50: "#F3FAFF",
              100: "#CBF3FE",
              200: "#98E2FD",
              300: "#64CAFB",
              400: "#3EB1F8",
              500: "#008AF4",
              600: "#006AD1",
              700: "#004FAF",
              800: "#00388D",
              900: "#002875",
              foreground: "#FFFFFF",
              DEFAULT: "#008AF4",
            },
            success: {
              50: "#F5FCE3",
              100: "#EAFCD2",
              200: "#D1FAA7",
              300: "#AEF178",
              400: "#8BE355",
              500: "#5AD123",
              600: "#40B319",
              700: "#2A9611",
              800: "#18790B",
              900: "#0B6406",
              foreground: "#FFFFFF",
              DEFAULT: "#5AD123",
            },
            warning: {
              50: "#FFFFF0",
              100: "#FFF9CC",
              200: "#FFF099",
              300: "#FFE666",
              400: "#FFDC3F",
              500: "#FFCC00",
              600: "#DBAA00",
              700: "#B78B00",
              800: "#936D00",
              900: "#7A5700",
              foreground: "#FFFFFF",
              DEFAULT: "#FFCC00",
            },
            danger: {
              50: "#FFF4E8",
              100: "#FFE7D1",
              200: "#FFC9A3",
              300: "#FFA575",
              400: "#FF8152",
              500: "#FF4719",
              600: "#DB2B12",
              700: "#B7150C",
              800: "#93070B",
              900: "#7A0410",
              foreground: "#FFFFFF",
              DEFAULT: "#FF4719",
            },
            focus: "#008AF4",
          },
        },

        dark: {
          colors: {
            background: "#121212",
            foreground: "#FFFFFF",
            primary: {
              50: "#F0F5FF",
              100: "#D9E6FD",
              200: "#B4CBFC",
              300: "#8DACF6",
              400: "#6E91EC",
              500: "#4169E1",
              600: "#2F50C1",
              700: "#203AA2",
              800: "#142782",
              900: "#0C1A6C",
              foreground: "#FFFFFF",
              DEFAULT: "#4169E1",
            },
            secondary: {
              50: "#F3FAFF",
              100: "#CBF3FE",
              200: "#98E2FD",
              300: "#64CAFB",
              400: "#3EB1F8",
              500: "#008AF4",
              600: "#006AD1",
              700: "#004FAF",
              800: "#00388D",
              900: "#002875",
              foreground: "#FFFFFF",
              DEFAULT: "#008AF4",
            },
            success: {
              50: "#F5FCE3",
              100: "#EAFCD2",
              200: "#D1FAA7",
              300: "#AEF178",
              400: "#8BE355",
              500: "#5AD123",
              600: "#40B319",
              700: "#2A9611",
              800: "#18790B",
              900: "#0B6406",
              foreground: "#FFFFFF",
              DEFAULT: "#5AD123",
            },
            warning: {
              50: "#FFFFF0",
              100: "#FFF9CC",
              200: "#FFF099",
              300: "#FFE666",
              400: "#FFDC3F",
              500: "#FFCC00",
              600: "#DBAA00",
              700: "#B78B00",
              800: "#936D00",
              900: "#7A5700",
              foreground: "#FFFFFF",
              DEFAULT: "#FFCC00",
            },
            danger: {
              50: "#FFF4E8",
              100: "#FFE7D1",
              200: "#FFC9A3",
              300: "#FFA575",
              400: "#FF8152",
              500: "#FF4719",
              600: "#DB2B12",
              700: "#B7150C",
              800: "#93070B",
              900: "#7A0410",
              foreground: "#FFFFFF",
              DEFAULT: "#FF4719",
            },
            focus: "#008AF4",
          },
        },
      },
    }),
  ],
};

export default config;
