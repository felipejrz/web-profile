import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

function ProfilePhoto() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative", 
        overflow: "hidden", 
      }}
    >
      {/* Imagen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        sx={{
          width: { xs: "60vw", sm: "298px", lg: "498px" },
          height: { xs: "60vw", sm: "298px", lg: "498px" },
          mixBlendMode: "lighten",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <img
          src="src\assets\foto-home.png"
          alt="Imagen"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            position: "absolute", 
            top: 0,
            left: 0,
          }}
        />
      </motion.div>

      {/* Círculo animado */}
      <motion.svg
        width="350px"
        height="350px"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke={theme.palette.primary.main}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </Box>
  );
}

export default ProfilePhoto;
