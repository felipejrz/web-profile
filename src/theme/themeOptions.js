// Configuración de tema claro
const lightThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#105170",
      contrastText: "#e0f2fa",
    },
    secondary: {
      main: "#69c0f2",
      contrastText: "#030f16",
    },
    divider: "#0294e8",
    text: {
      primary: "rgb(3, 15, 22)",
      secondary: "rgba(3, 15, 22, 0.6)",
      disabled: "rgba(3, 15, 22, 0.38)",
      hint: "rgb(2, 148, 232)",
    },
    background: {
      default: "#e0f2fa",
    },
  },
};

// Configuración de tema oscuro
const darkThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#8fd1ef",
      contrastText: "#05171f",
    },
    secondary: {
      main: "#0d6496",
      contrastText: "#e9f5fc",
    },
    divider: "#15a8fd",
    text: {
      primary: "rgb(233, 245, 252)",
      secondary: "rgba(233, 245, 252, 0.6)",
      disabled: "rgba(233, 245, 252, 0.38)",
      hint: "rgb(21, 168, 253)",
    },
    background: {
      default: "#05171f",
    },
  },
};

// Exportar función para obtener opciones de tema según el modo
export const getThemeOptions = (mode) => {
  return mode === "dark" ? darkThemeOptions : lightThemeOptions;
};
