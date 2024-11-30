import { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext();

// Custom hook for consuming context
export const useUser = () => {
  return useContext(UserContext);
};

// Context provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
