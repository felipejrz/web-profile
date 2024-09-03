// src/App.jsx o donde manejes el scroll
import React from "react";
import ProfileNavBar from "./components/ProfileNavBar";
import { Typography} from '@mui/material';

function App() {
  // Función para desplazarse a una sección específica
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Ajuste para compensar la altura de la AppBar más un pequeño margen
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <ProfileNavBar scrollToSection={scrollToSection} />
      {/* Tus secciones */}

      <div id="section1" style={{padding: "80px 20px 20px 20px" }}>
        <Typography variant="h2" color="secondary">Sobre Mi</Typography>
        <Typography variant="body1">Contenido sobre mí...</Typography>
      </div>
      <div id="section2" style={{ height: "100vh", padding: "80px 20px 20px 20px" }}>
        <Typography variant="h2">Experiencia</Typography>
        <Typography variant="body1">Contenido sobre experiencia...</Typography>
      </div>
      <div id="section3" style={{ height: "100vh", padding: "80px 20px 20px 20px" }}>
        <Typography variant="h2">Proyectos</Typography>
        <Typography variant="body1">Contenido sobre proyectos...</Typography>
      </div>
      <div id="section4" style={{ height: "100vh", padding: "80px 20px 20px 20px" }}>
        <Typography variant="h2">Contacto</Typography>
        <Typography variant="body1">Contenido de contacto...</Typography>
      </div>
    </div>
  );
}

export default App;
