import CocktailItem from "./CocktailItem";
import Loading from "../Loading";
import "../layout/Layout.scss";

import { useGlobalContext } from "../../store/context";

function CocktailList() {
  const { loadedCocktails, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (loadedCocktails.length < 1 ) {
    return (
      <section>
        <h1 className="section-title">No cocktails available</h1>
      </section>
    );
  }

  return (
    <section>
      <h1 className="section-title">List of Cocktails</h1>
      <div>
        {loadedCocktails.map((item) => {
          return <CocktailItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default CocktailList;
