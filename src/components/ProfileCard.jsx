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
  
  function ProfileCard({ titulo, imagen, texto, listChips, linkPages, linkHub }) {
    return (
      <Card>
        <CardMedia
          component="img"
          sx={{ height: 200 }}
          image={imagen}
          title={titulo}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {texto}
          </Typography>
          <Stack 
            direction="row" 
            spacing={1} 
            sx={{ 
              flexWrap: 'wrap', // Permite que los chips se ajusten en múltiples líneas
              gap: 1, // Espaciado entre chips
              mt: 2 
            }}
          >
            {listChips.map((chip, index) => (
              <Chip
                key={index}
                icon={chip.icon}
                label={chip.label}
                variant={chip.variant || "filled"}
                sx={{
                  borderColor: chip.color || "#ffffff",
                  color: chip.color || "#ffffff",
                  "& .MuiChip-icon": {
                    color: chip.color || "#ffffff",
                  },
                  padding: {
                    xs: '2px 4px', // Padding pequeño en pantallas extra pequeñas
                    sm: '4px 8px', // Padding mediano en pantallas pequeñas
                    md: '6px 12px' // Padding normal en pantallas medianas y grandes
                  }
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
  