import { createContext, useState, useEffect } from "react";

export const ProfileContext = createContext();

export function ProfileContextProvider(props) {
  const [prueba, setPrueba] = useState()
    return (
      <ProfileContext.Provider
      value={{
        prueba,
        setPrueba, 
      }}
    >
      {props.children}
    </ProfileContext.Provider>
    )
}
