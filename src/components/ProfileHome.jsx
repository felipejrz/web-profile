import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProfileButton from "./ProfileButton";
import ProfilePhoto from "./ProfilePhoto";

function ProfileHome() {
  return (
    <Box sx={{ height: '100%' }}>
      <Grid container sx={{ height: '100%' }}>

      </Grid>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="body1">Desarrollador web</Typography>
              <Typography variant="h2" component="h1">
                Hola, soy
              </Typography>
              <Typography variant="h1" component="h1" color="primary">
                Felipe Juárez
              </Typography>
              <Typography variant="body1">
                Soy desarrollador web con experiencia en crear aplicaciones web
                modernas y funcionales. Me encanta resolver problemas y crear
                soluciones elegantes para desafíos tecnológicos.
              </Typography>
              <ProfileButton />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <ProfilePhoto />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProfileHome;
