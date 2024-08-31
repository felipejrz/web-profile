// App.jsx
import React, { useState } from 'react';
import ProfileNavBar from "./components/ProfileNavBar";
import { Typography, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const App = () => {
  const [themeMode, setThemeMode] = useState('light');

  const getTheme = () => {
    switch (themeMode) {
      case 'dark':
        return createTheme({ palette: { mode: 'dark' } });
      case 'system':
        return createTheme(); // System theme is applied by default
      default:
        return createTheme({ palette: { mode: 'light' } });
    }
  };

  const toggleTheme = (mode) => {
    setThemeMode(mode);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <ProfileNavBar scrollToSection={scrollToSection} toggleTheme={toggleTheme} />
      <div style={{ height: '64px' }} /> {/* Spacer to prevent content from hiding behind AppBar */}

      <div id="section1" style={{ height: '100vh', padding: '20px' }}>
        <Typography variant="h2">Sobre Mi</Typography>
        <Typography variant="body1">Contenido sobre mí...</Typography>
      </div>
      <div id="section2" style={{ height: '100vh', padding: '20px' }}>
        <Typography variant="h2">Experiencia</Typography>
        <Typography variant="body1">Contenido sobre experiencia...</Typography>
      </div>
      <div id="section3" style={{ height: '100vh', padding: '20px' }}>
        <Typography variant="h2">Proyectos</Typography>
        <Typography variant="body1">Contenido sobre proyectos...</Typography>
      </div>
      <div id="section4" style={{ height: '100vh', padding: '20px' }}>
        <Typography variant="h2">Contacto</Typography>
        <Typography variant="body1">Contenido de contacto...</Typography>
      </div>
    </ThemeProvider>
  );
};

export default App;
