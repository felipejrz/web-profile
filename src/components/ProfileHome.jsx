import { Typography, Box, Button } from "@mui/material";
import { LuDownload } from "react-icons/lu";
import { useTheme } from "@mui/material/styles";
import ProfileButton from "./ProfileButton";
import ProfilePhoto from "./ProfilePhoto";

function ProfileHome() {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
            alignItems: "center",
            py: { lg: 8 },
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              textAlign: { xs: "center", lg: "left" },
              order: { xs: 2, lg: "unset" }, // Mantiene el orden correcto en xs y lg
              mb: { xs: 8, lg: 0 },
            }}
          >
            <Typography variant="h6" component="span">
              Desarrollador web
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 3,
                fontSize: {
                  xs: "3rem", 
                  sm: "4rem",
                  md: "5rem", 
                  lg: "7rem",
                  xl: "8rem", 
                },
              }}
            >
              Hola, soy <br />
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: {
                    xs: "3rem", 
                    sm: "4rem",
                    md: "5rem", 
                    lg: "7rem",
                    xl: "8rem", 
                  },
                }}
              >
                Felipe Juárez
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              sx={{ maxWidth: "500px", mb: 3, mx: { xs: "auto", lg: 0 } }}
            >
              Soy desarrollador web con experiencia en crear aplicaciones web
              modernas y funcionales. Me encanta resolver problemas y crear
              soluciones elegantes para desafíos tecnológicos.
            </Typography>

            {/* Botones */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                variant="outlined"
                size="large"
                sx={{
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Descargar CV
                <LuDownload style={{ fontSize: "1.5rem" }} />
              </Button>
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
                  borderColor: "#f50057",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#f50057",
                  fontSize: "1rem",
                  transition: "all 0.5s",
                  "&:hover": {
                    color: "#ffffff",
                    backgroundColor: "#f50057",
                  },
                }}
              />
            </Box>
          </Box>

          {/* Photo Section */}
          <Box sx={{ order: { xs: 1, lg: "unset" }, mx:5}}>
            <ProfilePhoto />
          </Box>
        </Box>
      </Box>

      {/* <section className="h-full">
        <div className="containter mx auto h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
            text 
            <div className="text-center lg:text-left order-2 lg:order-none">
              <spam className="text-lg">Desarrollador web</spam>
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
              <div className="flex flex-col lg:flex-row items-center grap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center grap-2"
                >
                  <spam>Descargar CV</spam>
                  <LuDownload className="text-lg" />
                </Button>
                <div className="mb-8 lg:mb-0">
                  <ProfileButton
                    containerStyles="flex grap-6"
                    iconStyles="w-9 h-9 border border-accent rounder-full flex justify-center items-center text-accent text-base hove:text-primary hover:transition-all duration:500"
                  />
                </div>
              </div>
            </div>
            Foto
            <div className="order-1 lg:order-none mb-8 lg:mb-0">
              <ProfilePhoto />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default ProfileHome;
