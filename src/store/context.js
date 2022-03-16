import { useState, useContext, createContext, useEffect } from "react";
import { useCallback } from "react";

const searchByName = "www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const searchRandom = "www.thecocktaildb.com/api/json/v1/1/random.php";

const AppContext = createContext();

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [loadedCocktails, setLoadedCocktails] = useState([]);

  return (
    <AppContext.Provider value={{ isLoading, loadedCocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
