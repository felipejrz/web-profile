import React from "react";
import { Avatar, Box } from "@mui/material";
import { keyframes } from "@emotion/react";

// Animación para el marco
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ProfilePhoto = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: 200, // Ajusta el ancho según sea necesario
        height: 200, // Ajusta la altura según sea necesario
        "&::before": {
          content: '""',
          position: "absolute",
          top: -10, // Tamaño del marco
          left: -10, // Tamaño del marco
          right: -10, // Tamaño del marco
          bottom: -10, // Tamaño del marco
          border: "4px solid #1976d2", // Color del marco
          borderRadius: "50%",
          animation: `${pulse} 2s infinite`,
          zIndex: -1,
        },
      }}
    >
      <Avatar
        src="/path/to/your/photo.jpg" // Cambia esta ruta a la ubicación de tu foto
        sx={{
          width: 200, // Ajusta el tamaño de la foto
          height: 200, // Ajusta el tamaño de la foto
        }}
      />
    </Box>
  );
};

export default ProfilePhoto;
