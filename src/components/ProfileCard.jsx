import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack,
  Chip,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FaLink, FaGithub } from "react-icons/fa";

function ProfileCard({ titulo, imagen, texto, listChips, linkPages, linkHub }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        margin: {
          xs: 1,
          md: 2,
        },
        boxShadow: 4,
        overflow: "hidden",
        position: "relative",
        borderRadius: "16px",
        backgroundColor: theme.palette.background.default,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)", // Zoom Card
        },
        "&:hover .zoom-image": {
          transform: "scale(1.04)", // Zoom imagen
        },
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: { xs: 200, md: 230, lg: 250 },
            width: "100%",
            transition: "transform 0.3s ease-in-out",
            objectFit: "cover",
          }}
          image={imagen}
          title={titulo}
          alt={`${titulo} preview`}
          className="zoom-image"
        />
      </Box>
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontSize: {
              xs: "1.2rem",
              sm: "1.4rem",
              md: "1.6rem",
            },
          }}
        >
          {titulo}
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

        {/* Chips Section */}
        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            gap: {
              xs: 0.5,
              sm: 0.75,
              md: 1,
            },
            mt: 2,
          }}
        >
          {listChips.map((chip, index) => (
            <Chip
              key={index}
              icon={chip.icon}
              label={chip.label}
              variant={theme.palette.mode === "dark" ? "outlined" : "filled"}
              sx={{
                backgroundColor:
                  theme.palette.mode === "light" ? chip.color : "transparent",
                borderColor: chip.color,
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.text.primary
                    : chip.color,
                "& .MuiChip-icon": {
                  color:
                    theme.palette.mode === "light"
                      ? theme.palette.text.primary
                      : chip.color,
                },
                fontSize: {
                  xs: "0.6rem",
                  sm: "0.7rem",
                  md: "0.8rem",
                },
                paddingLeft: {
                  xs: "3px",
                  sm: "4px",
                  md: "5px",
                },
                transition: "all 0.1s ease-in-out",
                "&:hover": {
                  backgroundColor: chip.color,
                  color: theme.palette.background.paper,
                  "& .MuiChip-icon": {
                    color: theme.palette.background.paper,
                  },
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
          aria-label="View Project Preview"
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
            },
          }}
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
          aria-label="View GitHub Repository"
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
            },
          }}
        >
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProfileCard;
