import CocktailList from '../components/cocktails/CocktailList';
import SearchForm from '../components/SearchForm';

function AllCocktailsPage() {
  return (
    <section>
      <SearchForm />
      <CocktailList />
    </section>
  );
}

export default AllCocktailsPage;
