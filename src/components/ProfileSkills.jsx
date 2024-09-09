import React from "react";
import { Card, CardContent, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function ProfileSkills({ icon: IconComponent, color }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "90%", sm: "90%", md: "80%" },
        height: { xs: "120px", sm: "140px", md: "160px" },
        backgroundColor: theme.palette.background.default,
        transition: "transform 0.3s ease-in-out",
        borderRadius: "16px",
        boxShadow: 4,
        mx: "auto",
        my: 2,
        "&:hover": {
          transform: "scale(1.03)",
          color: color,
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: { xs: 40, sm: 50, md: 60 },
            color: "inherit", 
          }}
        >
          <IconComponent />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProfileSkills;
