import { Typography } from "@mui/material";
import ProfileNavBar from "./components/ProfileNavBar";
import ProfileHome from './components/ProfileHome'
import ProfileListCard from './components/ProfileListCard'
import ProfileTimeLine from './components/ProfileTimeLine'
import ProfileListSkills from "./components/ProfileListSkills";
import ProfileFooter from './components/ProfileFooter'

//* Función para desplazarse a una sección específica
function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
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
        style={{padding: "0px 20px 0px 20px" }}
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
        <Typography variant="h2">Skills</Typography>
        <ProfileListSkills/>
      </div>
      <ProfileFooter/>
    </div>
  );
}

export default App;
