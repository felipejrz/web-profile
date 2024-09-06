import React from "react";
import { Button, Box, IconButton, Link } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

const socials = [
  { icon: <Email />, path: "mailto:felipe_jrz19@outlook.es" }, // Cambiado a mailto:
  { icon: <GitHub />, path: "https://github.com/felipejrz" },
  { icon: <LinkedIn />, path: "https://www.linkedin.com/in/felipe-daniel-juarez-alvarez-85216728b/" },
];

function ProfileButton({ containerStyles, iconStyles }) {
  return (
    <Box sx={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target={item.path.startsWith("mailto:") ? "_self" : "_blank"} // Asegura que el enlace de correo se abra en el mismo contexto
          rel={item.path.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        >
          <IconButton sx={iconStyles}>{item.icon}</IconButton>
        </Link>
      ))}
    </Box>
  );
}

export default ProfileButton;
