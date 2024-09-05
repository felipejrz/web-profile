import { createContext, useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getThemeOptions } from "../theme/themeOptions";

export const ProfileContext = createContext();

export function ProfileContextProvider({ children }) {
  const [themeMode, setThemeMode] = useState("system");

  // Función para determinar el tema efectivo
  const getEffectiveTheme = (mode) => {
    if (mode === "system") {
      //* Detectar preferencia de color del sistema
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return mode;
  };

  // Crear el tema de MUI basado en el modo actual
  const theme = createTheme(getThemeOptions(getEffectiveTheme(themeMode)));

  // Función para cambiar el tema
  const toggleTheme = (mode) => {
    setThemeMode(mode);
  };

  // Efecto para escuchar cambios en la preferencia de color del sistema
  useEffect(() => {
    if (themeMode === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e) => {
        setThemeMode(e.matches ? "dark" : "light");
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, [themeMode]);

  return (
    <ProfileContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ProfileContext.Provider>
  );
}
