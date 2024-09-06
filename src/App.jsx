// src/App.jsx o donde manejes el scroll
import React from "react";
import ProfileNavBar from "./components/ProfileNavBar";
import { Typography } from "@mui/material";
import ProfileListCard from './components/ProfileListCard'
import ProfileTimeLine from './components/ProfileTimeLine'
import ProfileHome from './components/ProfileHome'

//* Función para desplazarse a una sección específica
function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div data-scroll-container>
      <ProfileNavBar scrollToSection={scrollToSection} />

      <div
        id="section1"
        data-scroll-section
        style={{padding: "80px 20px 00px 20px" }}
      >
        <ProfileHome/>
      </div>
      <div
        id="section2"
        data-scroll-section
        style={{padding: "10px 20px 0px 20px" }}
      >
        <Typography  data-scroll data-scroll-speed="1" variant="h2" >Experiencia Laboral</Typography>
        <ProfileTimeLine/>
      </div>
      <div
        id="section3"
        data-scroll-section
        style={{padding: "10px 20px 20px 20px" }}
        >
        <Typography variant="h2">Proyectos</Typography>
        <ProfileListCard/>
      </div>
      
      <div
        id="section4"
        data-scroll-section
        style={{padding: "0px 20px 20px 20px" }}
      >
        <Typography variant="h2">Contacto</Typography>
        <Typography variant="body1">Contenido de contacto...</Typography>
      </div>
    </div>
  );
}

export default App;
