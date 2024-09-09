import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import ProfileSkills from "./ProfileSkills";
import { dataSkills } from "../data/dataSkills";

function ProfileListSkills() {
  return (
    <Box
      sx={{
        mx: {sm: 2, md: 5, lg:6},
      }}
    >
      <Grid container>
        {dataSkills.map((skills, index) => (
          <Grid key={index} size={{ xs: 6, sm: 6, md: 3 }}>
            <ProfileSkills 
            icon={skills.icon} 
            color={skills.color} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProfileListSkills;
