import { useState, useContext, createContext, useEffect } from "react";
import { useCallback } from "react";

const searchByName = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const searchRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [loadedCocktails, setLoadedCocktails] = useState([]);

  const fetchCocktail = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${searchByName}${searchTerm}`);
      const data = await response.json();
      // console.log(response);
      const { drinks } = data;
      if (drinks !== null) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, strInstructions } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
            instruction: strInstructions,
          };
        });
        setLoadedCocktails(newCocktails);
        // console.log(newCocktails);
      } else {
        setLoadedCocktails([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchCocktail();
  }, [searchTerm, fetchCocktail]);

  return (
    <AppContext.Provider value={{ isLoading, loadedCocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppContext;
