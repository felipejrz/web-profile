import React from "react";
import { Button, Box, IconButton, Link } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

const socials = [
  { icon: <Email />, path: "" },
  { icon: <GitHub />, path: "" },
  { icon: <LinkedIn />, path: "" },
];

function ProfileButton({ containerStyles, iconStyles }) {
  return (
    <Box sx={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton sx={iconStyles}>{item.icon}</IconButton>
        </Link>
      ))}
    </Box>
  );
}

export default ProfileButton;
