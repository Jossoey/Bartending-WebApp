import { Link } from "react-router-dom";

import "./MainNavigation.scss";

function MainNavigation() {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">Bartending Recipes</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">All Cocktails</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
