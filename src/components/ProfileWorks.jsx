import {
  TimelineItem,
  TimelineDot,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab/";
import { Typography, Paper, styled } from "@mui/material/";
import { useTheme } from "@mui/material/styles";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

const StyledPaper = styled(Paper)(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  padding: "12px",
  boxShadow: 4,
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
          display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" }, 
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
              fontSize: {
                xs: "1.2rem",
                sm: "1.4rem",
                md: "1.6rem",
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
              fontSize: {
                xs: "1.2rem",
                sm: "1.4rem",
                md: "1.6rem",
              },
              display: {
                md: "none",
                lg: "none",
                xl: "none",
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
              fontSize: {
                xs: "0.8rem",
                sm: "0.8rem",
                md: "1rem",
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
              fontSize: {
                xs: "0.7rem",
                sm: "0.7rem",
                md: "0.9rem",
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
