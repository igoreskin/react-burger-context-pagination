import React, { useContext } from 'react';
import BurgerContext from '../../context';

const SearchForm = ({ allBurgers, toBeginning }) => {

  const { state, dispatch } = useContext(BurgerContext);

  const handleChange = e => {
    dispatch({ type: 'SEARCH_BURGER', payload: { search: e.target.value, allBurgers }});
    toBeginning();
  }

  return (
    <div>
      <form>
        <div className="searchInput">
          <i className="fas fa-search"></i>
          <input 
            type="text" 
            style={{ width: "95.3%", marginBottom: "20px", paddingLeft: "4%" }} 
            placeholder="search"
            onChange={handleChange} 
          />
        </div>
      </form>
    </div>
  )
}

export default SearchForm;
