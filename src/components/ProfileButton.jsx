import React from 'react';
import { Button, Box } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

function ProfileButton() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            href="/path/to/your/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV
          </Button>
          <Button
            variant="outlined"
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHub />}
          >
          </Button>
          <Button
            variant="outlined"
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedIn />}
          >
          </Button>
          <Button
            variant="outlined"
            href="mailto:your-email@example.com"
            startIcon={<Email />}
          >
            Correo
          </Button>
        </Box>
      );
}

export default ProfileButton