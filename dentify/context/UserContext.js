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

  const updateUser = (newUser) => {
    console.log("Updating user context:", newUser); // Debug log
    setUser(newUser); // Updates the state correctly
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
