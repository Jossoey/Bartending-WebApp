import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

import "../components/layout/Layout.scss";

const searchById = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function SingleCocktailPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${searchById}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h1 className="section-title">No cocktail available</h1>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <section className="single-cocktail">
        <h2 className="section-title">{name}</h2>
        <div className="card single-cocktail-card">
          <img src={image} alt={name}></img>
          <dl className="single-cocktail-description">
            <p>
              <dt>Category</dt> <dd>: {category}</dd>
            </p>
            <p>
              <dt>Info</dt> <dd>: {info}</dd>
            </p>
            <p>
              <dt>Glass Type</dt> <dd>: {glass}</dd>
            </p>
            <p>
              <dt>Instructions</dt> <dd>: {instructions}</dd>
            </p>
            <p>
              <dt>Ingredients</dt>
              <dd>: 
                {ingredients.map((item, index) => {
                  return item ? <span key={index}> {item}, </span> : null;
                })}
              </dd>
            </p>
          </dl>
        </div>
        <div className="btn">
          <Link to="/" className="btn-primary">
            home
          </Link>
        </div>
      </section>
    );
  }
}

export default SingleCocktailPage;
