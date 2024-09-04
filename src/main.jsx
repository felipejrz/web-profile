import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ProfileContextProvider } from './context/ProfileContext';
import './styles.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProfileContextProvider>
      <App />
    </ProfileContextProvider>
  </StrictMode>
);
