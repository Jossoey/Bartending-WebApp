import { useEffect, useRef } from "react";
import { useGlobalContext } from "../store/context";

function SearchFrom() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Search Cocktail</label>
        <input
          type="text"
          name="name"
          id="name"
          ref={searchValue}
          onChange={searchCocktail}
        />
      </div>
    </form>
  );
}

export default SearchFrom;
