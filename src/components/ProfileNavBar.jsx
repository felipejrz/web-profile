// src/components/ProfileNavBar.jsx
import React, { useState, useEffect, useContext } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, useTheme, Box } from '@mui/material';
import { motion } from 'framer-motion';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { ProfileContext } from "../context/ProfileContext"; // Importar el contexto

function ProfileNavBar({ scrollToSection }) {
  const theme = useTheme(); // Obtener el tema actual de MUI
  const [anchorEl, setAnchorEl] = useState(null); // Estado para manejar el menú de temas
  const [activeSection, setActiveSection] = useState(''); // Estado para la sección activa
  const [isScrolled, setIsScrolled] = useState(false); // Estado para detectar si se hizo scroll

  const { themeMode, toggleTheme } = useContext(ProfileContext); // Usar el contexto del tema

  // Función para abrir el menú de temas
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Función para cerrar el menú de temas
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Función para cambiar el tema
  const handleThemeChange = (mode) => {
    toggleTheme(mode); // Cambiar el tema en el contexto
    handleMenuClose(); // Cerrar el menú después de seleccionar
  };

  // Variantes para las animaciones de framer-motion
  const buttonVariants = {
    hover: {
      color: '#7B1FA2', // Color morado al hacer hover
      transition: {
        duration: 0.3,
      },
    },
  };

  // Función para obtener el icono actual según el tema
  const getCurrentIcon = () => {
    switch (themeMode) {
      case 'light':
        return <LightModeIcon />;
      case 'dark':
        return <NightlightIcon />;
      case 'system':
      default:
        return <SettingsBrightnessIcon />;
    }
  };

  // Lista de elementos de navegación
  const navItems = [
    { id: 'section1', label: 'Sobre Mi' },
    { id: 'section2', label: 'Experiencia' },
    { id: 'section3', label: 'Proyectos' },
    { id: 'section4', label: 'Contacto' },
  ];

  // Efecto para manejar el scroll y determinar la sección activa
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0); // Detectar si se hizo scroll

      // Determinar la sección activa según la posición del scroll
      const currentSection = navItems.find((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 80 && rect.bottom > 80; // 80px para compensar la altura de la AppBar
        }
        return false;
      });
      setActiveSection(currentSection ? currentSection.id : '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar inicialmente para establecer la sección activa

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <AppBar
      position="fixed"
      elevation={isScrolled ? 4 : 0} // Agregar sombra si se hizo scroll
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fondo semi-transparente
        boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none', // Sombra cuando se hace scroll
        backdropFilter: 'blur(10px)', // Efecto de desenfoque
        color: theme.palette.text.primary, // Color del texto según el tema
        transition: 'box-shadow 0.3s ease-in-out', // Transición suave para la sombra
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Contenedor para los botones de navegación, centrados */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={activeSection === item.id ? undefined : 'hover'}
              variants={buttonVariants}
              style={{ marginRight: '20px' }}
            >
              <Typography
                variant="body1"
                onClick={() => scrollToSection(item.id)}
                sx={{
                  cursor: 'pointer',
                  color: activeSection === item.id ? '#7B1FA2' : theme.palette.text.primary, // Color morado si está activo
                  fontWeight: activeSection === item.id ? 'bold' : 'normal', // Negrita si está activo
                  textTransform: 'none',
                }}
              >
                {item.label}
              </Typography>
            </motion.div>
          ))}
        </Box>

        {/* Botón para abrir el menú de temas */}
        <motion.div whileHover="hover" variants={buttonVariants}>
          <Typography
            variant="body1"
            onClick={handleMenuClick}
            sx={{ cursor: 'pointer', textTransform: 'none', display: 'flex', alignItems: 'center' }}
          >
            {getCurrentIcon()}
            &nbsp;Theme
          </Typography>
        </motion.div>

        {/* Menú desplegable para seleccionar el tema */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleThemeChange('light')}>
            <LightModeIcon fontSize="small" />
            &nbsp;Light
          </MenuItem>
          <MenuItem onClick={() => handleThemeChange('dark')}>
            <NightlightIcon fontSize="small" />
            &nbsp;Dark
          </MenuItem>
          <MenuItem onClick={() => handleThemeChange('system')}>
            <SettingsBrightnessIcon fontSize="small" />
            &nbsp;System
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default ProfileNavBar;
