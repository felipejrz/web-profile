import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import * as Icons from '../data/dataIcons'

function ProfilePhoto (){
  const theme = useTheme();

  return (
    <>
      <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
        >
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            style={{
              width: "298px",
              height: "298px",
              lg: { width: "498px", height: "498px" },
              mixBlendMode: "lighten",
              position: "absolute",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8bwUQIgkM7RHbSti3OFfLSO1V_3f-cyeDA&s"
              alt="Imagen"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                position: "relative",
              }}
            />
          </motion.div>

          {/* Círculo animado */}
          <motion.svg
            width="300px"
            height="300px"
            lg={{ width: "506px", height: "506px" }}
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke= {theme.palette.secondary.main}
              strokeWidth="5"
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
        </motion.div>
      </Box>

{/*   <div className="w-full h-full relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
        >
          Imagen
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mix-blend-lighten alsolute"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8bwUQIgkM7RHbSti3OFfLSO1V_3f-cyeDA&s"
              alt=""
              priority
              quality={100}
              fill
              className="objet-contain"
            />
          </motion.div>

          Circulo
          <motion.svg
            className="w[300px] xl:w-[506px] h[300px] xl:h-[506px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#ffffff"
              strokeWidth="4"
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
        </motion.div>
      </div> */}
    </>
  );
};

export default ProfilePhoto;
