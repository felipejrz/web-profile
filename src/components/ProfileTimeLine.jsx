import Timeline from "@mui/lab/Timeline";
import ProfileWorks from "./ProfileWorks";
import { styled } from "@mui/material/styles";
import { worksData } from "../data/dataWorks";

const StyledTimeline = styled(Timeline)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column-reverse', //* Invertir el flujo de los elementos
  '& .MuiTimelineItem-root': {
    padding: '0px',
  },
}));

export default function CustomizedTimeline() {
  return (
    <StyledTimeline position="alternate">
      {worksData.map((works, index) => (
        <ProfileWorks
          puesto={works.puesto}
          empresa={works.empresa}
          localizacion={works.localizacion}
          fechas={works.fechas}
          texto={works.texto}
          key={index}
        />
      ))}
    </StyledTimeline>
  );
}
