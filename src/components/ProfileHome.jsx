import { Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LuDownload } from "../data/dataIcons";
import ProfileButton from "./ProfileButton";
import ProfilePhoto from "./ProfilePhoto";

function ProfileHome() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: {
          xs: "100%",
          lg: "calc(100vh - 64px)",
        },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "center",
          alignItems: "center",
          py: { lg: 4 },
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            textAlign: { xs: "center", lg: "left" },
            order: { xs: 2, lg: "unset" }, // Mantiene el orden correcto en xs y lg
            mb: { xs: 4, lg: 0 },
          }}
        >
          <Typography variant="h6" component="span">
            Desarrollador web
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 2,
              fontSize: {
                xs: "2.5rem",
                sm: "4rem",
                md: "5rem",
                lg: "7rem",
                xl: "8rem",
              },
            }}
          >
            Hola, soy
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: theme.palette.primary.main,
              fontSize: {
                xs: "2.5rem",
                sm: "4rem",
                md: "5rem",
                lg: "7rem",
                xl: "8rem",
              },
            }}
          >
            Felipe Juárez
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "500px",
              mb: 3,
              mx: { xs: "auto", lg: 0 },
              fontSize: {
                xs: ".9rem",
                lg: "1.1rem",
              },
            }}
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
            <a
              href="assets/CV_Felipe_Daniel_Juárez_Alvarez.pdf"
              download="CV-Felipe-Daniel-Juárez-Alvarez.pdf"
              style={{ textDecoration: "none" }}
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
            </a>
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
                "&:hover": {
                  color: theme.palette.background.default,
                  backgroundColor: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                },
              }}
            />
          </Box>
        </Box>
        {/* Photo Section */}
        <Box
          sx={{ order: { xs: 1, lg: "unset" }, ml: { xs: 0, lg: 10 }, mb: 2 }}
        >
          <ProfilePhoto />
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileHome;
