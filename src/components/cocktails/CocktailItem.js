import { Link } from "react-router-dom";

import "./CocktailItem.scss";
import Card from "../ui/Card";

function CocktailItem({ id, name, image, info, glass, instruction }) {
  return (
    <Card className='cocktail'>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </Card>
  );
}

export default CocktailItem;
