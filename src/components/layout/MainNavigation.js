import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header>
      <div>Bartending Guide</div>
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
