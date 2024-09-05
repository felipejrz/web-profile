import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack,
  Chip,
} from "@mui/material";
import { FaLink, FaGithub } from "react-icons/fa";
import { useTheme } from "@mui/material/styles"; // Para usar los colores del tema

function ProfileCard({ titulo, imagen, texto, listChips, linkPages, linkHub }) {
  const theme = useTheme(); // Accede al tema actual (claro u oscuro)

  return (
    <Card
      sx={{
        margin: {
          xs: 1,
          md: 2,
        },
        boxShadow: 3,
        overflow: "hidden",
        position: "relative",
        transition: "transform 0.3s ease-in-out",
        backgroundColor: theme.palette.background.default, // Fondo según el tema
        "&:hover": {
          transform: "scale(1.02)", // Zoom más sutil en la tarjeta
        },
        "&:hover .zoom-image": {
          transform: "scale(1.05)", // Zoom sincronizado para la imagen
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: 200,
          transition: "transform 0.3s ease-in-out",
        }}
        className="zoom-image"
        image={imagen}
        title={titulo}
      />
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main, // Color primario según el tema
          }}
        >
          {titulo}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
          }}
        >
          {texto}
        </Typography>
        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            gap: 1,
            mt: 2,
          }}
        >
          {listChips.map((chip, index) => (
            <Chip
              key={index}
              icon={chip.icon}
              label={chip.label}
              variant={theme.palette.mode === 'dark' ? 'outlined' : 'filled'} // Cambiar entre outlined y filled según el tema
              sx={{
                backgroundColor: theme.palette.mode === 'light'
                  ? chip.color || theme.palette.background.paper // Fondo según el prop en tema claro
                  : 'transparent', // Fondo transparente en tema oscuro
                borderColor: chip.color || theme.palette.primary.main, // Color de borde según el tema
                color: theme.palette.mode === 'light'
                  ? theme.palette.text.primary // Texto en negro en tema claro
                  : chip.color || theme.palette.primary.contrastText, // Color de texto del chip en tema oscuro
                "& .MuiChip-icon": {
                  color: theme.palette.mode === 'light'
                    ? theme.palette.text.primary // Color del icono en negro en tema claro
                    : chip.color || theme.palette.primary.contrastText, // Color del icono en tema oscuro
                },
                padding: {
                  xs: "2px 4px",
                  sm: "4px 8px",
                  md: "6px 12px",
                },
              }}
            />
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
        <Button
          size="small"
          variant="outlined"
          startIcon={<FaLink />}
          href={linkPages}
          target="_blank"
          rel="noopener noreferrer"
        >
          Preview
        </Button>
        <Button
          size="small"
          variant="outlined"
          startIcon={<FaGithub />}
          href={linkHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProfileCard;
