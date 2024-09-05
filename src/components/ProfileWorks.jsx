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

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "6px 16px",
  boxShadow: 3,
  overflow: "hidden",
  position: "relative",
  transition: "transform 0.3s ease-in-out",
  backgroundColor: theme.palette.background.default,
  "&:hover": {
    transform: "scale(1.02)",
  },
  "&:hover .zoom-image": {
    transform: "scale(1.05)",
  },
}));

const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

function ProfileWorks({ puesto, empresa, localizacion, fechas, texto }) {
  const theme = useTheme();

  return (
    <TimelineItem sx={{ backgroundColor: theme.palette.background.default }}>
      <TimelineOppositeContent>
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
          <Typography variant="h4" component="h4" color="primary">
            {puesto} - {empresa}
          </Typography>
          <Typography variant="h5" component="h5" color="secondary">
            {localizacion}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
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
