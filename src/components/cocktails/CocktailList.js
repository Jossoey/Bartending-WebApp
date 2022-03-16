import CocktailItem from "./CocktailItem";
import Loading from "../Loading";
import "../layout/Layout.scss";

import { useGlobalContext } from "../../store/context";

function CocktailList() {
  const { loadedCoktails, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (loadedCoktails.length < 1) {
    return (
      <section>
        <h1 className="section-title">No cocktails available</h1>
      </section>
    );
  }

  return (
    <div>
      <h1>List of Cocktail</h1>
    </div>
  );
}

export default CocktailList;
