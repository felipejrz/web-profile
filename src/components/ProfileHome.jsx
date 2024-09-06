import { Container, Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProfileButton from "./ProfileButton";
import ProfilePhoto from "./ProfilePhoto";
import { LuDownload } from "react-icons/lu";
import { useTheme } from "@mui/material/styles";


function ProfileHome() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingY: { lg: 8 },
          paddingX: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" }, // flex-col xl:flex-row
            justifyContent: "space-between", // justify-between
            alignItems: "center",
            width: "100%", // Tomamos todo el ancho
            maxWidth: "1200px", // Si deseas un contenedor limitado
          }}
        >
          {/* Texto */}
          <Box
            sx={{
              textAlign: { xs: "center", lg: "left" }, // text-center xl:text-left
              marginBottom: { xs: 6, lg: 0 }, // Ajuste de márgenes
            }}
          >
            <Typography variant="spam" component="span">
              Desarrollador web
            </Typography>
            <Typography variant="h1" component="h1" sx={{ marginBottom: 3 }}>
              Hola, soy <br />
              <Typography variant="spam" component="span" color="primary">
                Felipe Juárez
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "500px",
                marginBottom: 3,
              }}
            >
              Soy desarrollador web con experiencia en crear aplicaciones web
              modernas y funcionales. Me encanta resolver problemas y crear
              soluciones elegantes para desafíos tecnológicos.
            </Typography>

            {/* Sección de botones */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                gap: 2,
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined" // variant outline en Material-UI
                size="large"
                sx={{
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 1, // grap-2 en Tailwind
                }}
              >
                Descargar CV
                <LuDownload style={{ fontSize: "1.5rem" }} />
              </Button>
              <Box sx={{ marginTop: { xs: 3, lg: 0 } }}>
                <ProfileButton
                  containerStyles={{
                    display: "flex",
                    gap: "24px",
                    flexDirection: "row",
                  }}
                  iconStyles={{
                    width: "2.25rem", 
                    height: "2.25rem",
                    border: "2px solid", 
                    borderColor: theme.palette.primary.main, 
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: theme.palette.primary.main, 
                    fontSize: "1rem",
                    transition: "all 0.5s", 
                    '&:hover': {
                      color: theme.palette.background.default, // Color del ícono en hover (debe coincidir con el fondo del botón)
                      backgroundColor: theme.palette.primary.main, // Color de fondo en hover
                      borderColor: theme.palette.primary.main, // Opcional: Puedes cambiar el color del borde si lo deseas
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Foto */}
          <Box>foto</Box>
        </Box>
      </Box>
      {/* 
      <section className="h-full">
        <div className="containter mx auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            text
            <div className="text-center xl:text-left">
              <spam className="text-xl">Desarrollador web</spam>
              <h1 className="h1 mb-6">
                {" "}
                Hola, soy <br />
                <spam>Felipe Juárez</spam>
              </h1>
              <p className="max-w-[500px] mb-9">
                Soy desarrollador web con experiencia en crear aplicaciones web
                modernas y funcionales. Me encanta resolver problemas y crear
                soluciones elegantes para desafíos tecnológicos.
              </p>
              Seccion de botones
              <div className="flex flex-col xl:flex-row items-center grap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center grap-2"
                >
                  <spam>Descargar CV</spam>
                  <LuDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <ProfileButton containerStyles="flex grap-6" iconStyles="w-9 h-9 border border-accent rounder-full flex justify-center items-center text-accent text-base hove:text-primary hover:transition-all duration:500"/>
                </div>
              </div>
            </div>
            Foto
            <div>foto</div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default ProfileHome;
