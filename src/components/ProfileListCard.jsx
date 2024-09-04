import { Grid } from "@mui/material";
import ProfileCard from "./ProfileCard";
import {profileData} from '../data/dataProjects'

function ProfileListCard() {
  return (
    <Grid container spacing={2}>
      {profileData.map((profile, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
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
  );
}

export default ProfileListCard;
