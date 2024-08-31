// ProfileNavBar.jsx
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';


function ProfileNavBar({ scrollToSection, toggleTheme }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeSection, setActiveSection] = useState('section1');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (themeMode) => {
    toggleTheme(themeMode);
    handleMenuClose();
  };

  const buttonVariants = {
    hover: {
      color: '#7B1FA2', // Color morado al hacer hover
      transition: {
        duration: 0.3,
      },
    },
  };

  const checkActiveSection = () => {
    const sections = ['section1', 'section2', 'section3', 'section4'];
    const offset = 50; // Ajuste para considerar el AppBar

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkActiveSection);
    return () => window.removeEventListener('scroll', checkActiveSection);
  }, []);

  const navItems = [
    { id: 'section1', label: 'Sobre Mi' },
    { id: 'section2', label: 'Experiencia' },
    { id: 'section3', label: 'Proyectos' },
    { id: 'section4', label: 'Contacto' },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        boxShadow: 'none',
        backdropFilter: 'blur(10px)',
        color: theme.palette.text.primary,
      }}
    >
      <Toolbar>
        {navItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover="hover"
            variants={buttonVariants}
            style={{ marginRight: '20px' }}
          >
            <Typography
              variant="body1"
              onClick={() => scrollToSection(item.id)}
              sx={{
                cursor: 'pointer',
                color: activeSection === item.id ? '#7B1FA2' : theme.palette.text.primary,
                fontWeight: activeSection === item.id ? 'bold' : 'normal',
                textTransform: 'none',
              }}
            >
              {item.label}
            </Typography>
          </motion.div>
        ))}
        <motion.div whileHover="hover" variants={buttonVariants}>
          <Typography
            variant="body1"
            onClick={handleMenuClick}
            sx={{ cursor: 'pointer', textTransform: 'none' }}
          >
            Theme
          </Typography>
        </motion.div>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleThemeChange('light')}>
            <LightModeIcon />
          </MenuItem>
          <MenuItem onClick={() => handleThemeChange('dark')}>
            <NightlightIcon />
            Oscuro
          </MenuItem>
          <MenuItem onClick={() => handleThemeChange('system')}>
            Sistema
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default ProfileNavBar;
