import { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  useTheme,
  Box,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { ProfileContext } from "../context/ProfileContext";
import * as Icons from '../data/dataIcons'

function ProfileNavBar({ scrollToSection }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");

  const { themeMode, toggleTheme } = useContext(ProfileContext);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (mode) => {
    toggleTheme(mode);
    handleMenuClose();
  };

  const buttonVariants = {
    hover: {
      color: theme.palette.primary.main,
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  const getCurrentIcon = () => {
    switch (themeMode) {
      case "light":
        return <Icons.MdLightMode fontSize="inherit" />;
      case "dark":
        return <Icons.MdDarkMode fontSize="inherit" />;
      case "system":
      default:
        return <Icons.MdOutlineSettingsBrightness fontSize="inherit" />;
    }
  };

  const navItems = [
    { id: "section1", label: "Sobre Mi" },
    { id: "section2", label: "Experiencia" },
    { id: "section3", label: "Proyectos" },
    { id: "section4", label: "Contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);

      const currentSection = navItems.find((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 80 && rect.bottom > 80;
        }
        return false;
      });
      setActiveSection(currentSection ? currentSection.id : "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1200,
      }}
    >
      <AppBar
        position="static"
        elevation={isScrolled ? 4 : 0}
        sx={{
          marginTop: "10px",
          backgroundColor: "transparent",
          backdropFilter: isScrolled ? "blur(8px)" : "none",
          color: theme.palette.text.primary,
          borderRadius: "50px",
          transition:
            "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          width: { xs: "85%", sm: "65%", md: "40%", lg: "32%", xl: "30%" },
          maxWidth: "100%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover="hover"
                variants={buttonVariants}
                style={{
                  padding: "4px 4px",
                }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem("")}
              >
                <Typography
                  variant="body2"
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    cursor: "pointer",
                    fontSize: { xs: "0.65rem", sm: ".9rem", md: "0.8rem", lg: "0.8rem", xl:"1rem"},
                    color:
                      activeSection === item.id || hoveredItem === item.id
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    fontWeight: activeSection === item.id ? "bold" : "normal",
                    textTransform: "none",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  {item.label}
                </Typography>
              </motion.div>
            ))}
            <motion.div whileHover="hover" variants={buttonVariants}>
              <IconButton
                onClick={handleMenuClick}
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: { xs: "1.1rem", sm: "1.5rem", md: "1.2rem" }, 
                }}
              >
                {getCurrentIcon()}
              </IconButton>
            </motion.div>
          </Box>
        </Toolbar>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleThemeChange("light")}>
            <Icons.MdLightMode fontSize="small" />
            &nbsp;Light
          </MenuItem>
          <MenuItem onClick={() => handleThemeChange("dark")}>
            <Icons.MdDarkMode fontSize="small" />
            &nbsp;Dark
          </MenuItem>
          <MenuItem onClick={() => handleThemeChange("system")}>
            <Icons.MdOutlineSettingsBrightness fontSize="small" />
            &nbsp;System
          </MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
}

export default ProfileNavBar;
