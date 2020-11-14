import React, { useContext, useState } from 'react';
import BurgerContext from '../../context';

const SearchForm = ({ allBurgers, toBeginning }) => {

  const { state, dispatch } = useContext(BurgerContext);

  const [alert, setAlert] = useState(false);

  const handleChange = e => {
    let str = e.target.value;
    let indicator = 0;
    allBurgers.forEach(el => {
      if (el.name.replace(/\W/g, '').toLowerCase().includes(str.replace(/\W/g, '').toLowerCase()) || str.length === 0) {
        dispatch({ type: 'SEARCH_BURGER', payload: { search: str, allBurgers } });
        toBeginning();
        setAlert(false);
        indicator++;
        } 
      }
    )
    if (indicator < 1) {
      dispatch({ type: 'SEARCH_BURGER', payload: { search: 1, allBurgers: [] } });
      setAlert(true);
    } 
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
          {alert && <span className="alert search animate__animated animate__flash">Burger not found!</span>}
        </div>
      </form>
    </div>
  )
}

export default SearchForm;
