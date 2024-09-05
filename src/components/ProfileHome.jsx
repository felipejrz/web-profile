import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import ProfileButton from "./ProfileButton";
import ProfilePhoto from "./ProfilePhoto";

function ProfileHome() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h3" component="h1">
              Hola, soy Felipe Juárez
            </Typography>
            <Typography variant="body1" paragraph>
              Soy desarrollador web con experiencia en crear aplicaciones web modernas
              y funcionales. Me encanta resolver problemas y crear soluciones
              elegantes para desafíos tecnológicos.
            </Typography>
            <ProfileButton />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <ProfilePhoto />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProfileHome;
