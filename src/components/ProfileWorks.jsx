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

// Estilos personalizados utilizando el tema
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "6px 16px",
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
}));

const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main, // Color del conector según el tema
}));

function ProfileWorks({ puesto, empresa, localizacion, fechas, texto }) {
  const theme = useTheme(); // Accede al tema actual

  return (
    <TimelineItem
      sx={{ backgroundColor: theme.palette.background.default}}
    >
      <TimelineOppositeContent>
        <Typography variant="h5" color = "primary">
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
          <Typography variant="h4" component="h4" color="primary">
            {puesto} - {empresa}
          </Typography>
          <Typography variant="h5" component="h5" color="secondary">
            {localizacion}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary, // Color de texto secundario según el tema
              mb: 2,
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
