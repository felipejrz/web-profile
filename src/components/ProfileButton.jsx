import React from "react";
import { Button, Box, IconButton } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

function ProfileButton() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
      <Button
        variant="outlined"
        href="/path/to/your/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        sx={{border: '2px solid'}}
      >
        Descargar CV
      </Button>

      <IconButton
        href="https://github.com/felipejrz"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        aria-label="GitHub"
        sx={(theme) => ({
          borderRadius: "50%",
          border: `2px solid ${theme.palette.primary.main}`, // Color del borde usando el color primario del tema
          "&:hover": {
            borderColor: theme.palette.primary.dark, // Color del borde al pasar el cursor
          },
          p: 1,
        })}
      >
        <GitHub />
      </IconButton>

      <IconButton
        href="https://www.linkedin.com/in/felipe-daniel-juarez-alvarez-85216728b/"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        aria-label="LinkedIn"
        sx={(theme) => ({
          borderRadius: "50%",
          border: `2px solid ${theme.palette.primary.main}`, // Color del borde usando el color primario del tema
          "&:hover": {
            borderColor: theme.palette.primary.dark, // Color del borde al pasar el cursor
          },
          p: 1,
        })}
      >
        <LinkedIn />
      </IconButton>

      <IconButton
        href="mailto:felipe_jrz19@outlook.es"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        aria-label="Email"
        sx={(theme) => ({
          borderRadius: "50%",
          border: `2px solid ${theme.palette.primary.main}`,
          "&:hover": {
            borderColor: theme.palette.primary.dark,
          },
          p: 1,
        })}
      >
        <Email />
      </IconButton>
    </Box>
  );
}

export default ProfileButton;
