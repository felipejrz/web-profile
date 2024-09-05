import { Container, Typography, Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import ProfileButton from "./ProfileButton";
import ProfilePhoto from "./ProfilePhoto";

function ProfileHome() {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center', // Centra verticalmente
        justifyContent: 'center', // Centra horizontalmente
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center" // Asegura que el grid se centre horizontalmente
      >
        <Grid item xs={12} md={7}>
          <Box>
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
          <ProfilePhoto />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProfileHome;
