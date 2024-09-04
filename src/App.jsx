// src/App.jsx
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import ProfileNavBar from "./components/ProfileNavBar";
import { Typography } from "@mui/material";

// Componente principal
function App() {
  const scrollRef = useRef(null); // Referencia al contenedor de scroll
  const locomotiveScrollInstance = useRef(null); // Referencia a la instancia de LocomotiveScroll

  useEffect(() => {
    // Inicializa Locomotive Scroll
    locomotiveScrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Limpia la instancia de Locomotive Scroll al desmontar el componente
    return () => {
      locomotiveScrollInstance.current.destroy();
    };
  }, []);

  // Función para desplazarse a una sección específica
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      locomotiveScrollInstance.current.scrollTo(element);
    }
  };

  return (
    <div ref={scrollRef} data-scroll-container>
      <ProfileNavBar scrollToSection={scrollToSection} />

      <div
        id="section1"
        data-scroll-section
        style={{ height: "120vh", padding: "80px 20px 20px 20px" }}
      >
        <Typography data-scroll data-scroll-speed="1" variant="h2">Sobre Mi</Typography>
        <Typography data-scroll data-scroll-speed="2" color="primary">Contenido sobre mí...</Typography>
      </div>

      <div
        id="section2"
        data-scroll-section
        style={{ height: "100vh", padding: "0px 20px 20px 20px" }}
      >
        <Typography data-scroll data-scroll-speed="1" variant="h2">Experiencia</Typography>
        <Typography data-scroll data-scroll-speed="2" variant="body1">Contenido sobre experiencia...</Typography>
      </div>
      <div
        id="section3"
        data-scroll-section
        style={{ height: "100vh", padding: "0px 20px 20px 20px" }}
      >
        <Typography data-scroll data-scroll-speed="1" variant="h2">Proyectos</Typography>
        <Typography data-scroll data-scroll-speed="2" variant="body1">Contenido sobre proyectos...</Typography>
      </div>
      
      <div
        id="section4"
        data-scroll-section
        style={{ height: "100vh", padding: "0px 20px 20px 20px" }}
      >
        <Typography data-scroll data-scroll-speed="1" variant="h2">Contacto</Typography>
        <Typography data-scroll data-scroll-speed="2" variant="body1">Contenido de contacto...</Typography>
      </div>
    </div>
  );
}

export default App;
