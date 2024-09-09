import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import ProfileCard from "./ProfileCard";
import { profileData } from "../data/dataProjects";

function ProfileListCard() {
  return (
    <Box>
      <Grid container>
        {profileData.map((profile, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 6 }}>
            <ProfileCard
              titulo={profile.titulo}
              imagen={profile.imagen}
              texto={profile.texto}
              listChips={profile.listChips}
              linkPages={profile.linkPages}
              linkHub={profile.linkHub}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProfileListCard;
