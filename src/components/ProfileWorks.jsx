import { styled } from "@mui/material/styles";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

// Estilo para el Paper que contiene el contenido del Timeline
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "12px",
  boxShadow: 3,
  overflow: "hidden",
  position: "relative",
  transition: "transform 0.3s ease-in-out",
  backgroundColor: theme.palette.background.default,
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

// Estilo para el TimelineConnector
const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

// Componente de Timeline para mostrar la experiencia laboral
function ProfileWorks({ puesto, empresa, localizacion, fechas, texto }) {
  const theme = useTheme();

  return (
    <TimelineItem
      sx={{
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down("md")]: {
          padding: 1,
        },
      }}
    >
      <TimelineOppositeContent
        sx={{
          [theme.breakpoints.down("md")]: {
            display: "none", // Oculta el contenido opuesto en pantallas pequeñas
          },
        }}
      >
        <Typography variant="h5" color="primary">
          {fechas}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary">
          <LaptopMacIcon />
        </TimelineDot>
        <StyledTimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <StyledPaper>
          <Typography
            variant="h5"
            component="h5"
            color="primary"
            sx={{
              mb: 1,
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.0rem",
              },
            }}
          >
            {puesto} - {empresa}
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            color="primary"
            sx={{
              display: { xs: "block", md: "none" },
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.0rem",
              },
            }}
          >
            {fechas}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="secondary"
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: ".8rem",
              },
            }}
          >
            {localizacion}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              mt: 1,
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.6rem", // Ajuste del tamaño de fuente en pantallas pequeñas
              },
            }}
          >
            {texto}
          </Typography>
        </StyledPaper>
      </TimelineContent>
    </TimelineItem>
  );
}

export default ProfileWorks;
