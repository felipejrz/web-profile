import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    button: {
      color: 'black',
      fontSize: '1.1rem',
      fontWeight: 500,
      textTransform: 'none',
      '&:hover': {
        color: '#e63946',
      },
    },
    activeButton: {
      color: '#e63946',
      fontWeight: 'bold',
    },
  }));

function ProfileNavItem({ label, href, isActive }) {
  const classes = useStyles();
  
  return (
    <Button
      href={href}
      className={`${classes.button} ${isActive ? classes.activeButton : ""}`}
    >
      {label}
    </Button>
  );
}

export default ProfileNavItem;
