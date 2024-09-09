import { Box, Typography, Link, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as Icons from '../data/dataIcons'

const socials = [
  { icon: <Icons.Facebook />, path: "" },
  { icon: <Icons.Instagram />, path: "" },
  { icon: <Icons.GitHub />, path: "https://github.com/felipejrz" },
  {
    icon: <Icons.LinkedIn />,
    path: "https://www.linkedin.com/in/felipe-daniel-juarez-alvarez-85216728b/",
  },
];

function ProfileFooter() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        color: theme.palette.text.primary,
        flexDirection: { xs: "column", sm: "row" },
        backgroundColor: `rgba(${theme.palette.secondary.main}, 0.8)`,
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: `rgba(${theme.palette.secondary.main}, 0.9)`,
        },
      }}
    >
      {/* Lado izquierdo: Nombre y Copyright */}
      <Typography
        variant="body2"
        sx={{
          mb: { xs: 2, sm: 0 },
          ml: { md: 10 },
          color: theme.palette.text.primary,
        }}
      >
        {"Copyright © "}
        <Link color="inherit" href="" underline="none">
          Felipe Juarez
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>

      {/* Lado derecho: Redes Sociales */}
      <Box sx={{ display: "flex", gap: "15px", mr: { md: 10 } }}>
        {socials.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            target={item.path.startsWith("mailto:") ? "_self" : "_blank"}
            rel={
              item.path.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            sx={{
              color: theme.palette.text.primary,
              "&:hover": {
                color: theme.palette.primary.light, 
              },
            }}
          >
            <IconButton
              sx={{
                color: "inherit",
                transition: "transform 0.3s ease", 
                "&:hover": {
                  transform: "scale(1.2)", 
                },
              }}
            >
              {item.icon}
            </IconButton>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default ProfileFooter;
