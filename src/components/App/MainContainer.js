import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import BurgerView from './BurgerView';
import SortingToolbar from './SortingToolbar';
import BurgerForm from './BurgerForm';
import SearchForm from './SearchForm';

const MainContainer = () => {

  const [burgers, setBurgers] = useState([]);

  const [approved, setApproved] = useState(false);

  useEffect(() => {fetchBurgers()}, []);

  const renderBurgers = burgers.map(burger => <BurgerView key={burger.id} burger={burger} onClick={() => setApproved(!approved)} />)

  const fetchBurgers = async () => {
    try {
      const res = await axios.get('http://localhost:3001/burgers');
      console.log(res.data)
      setBurgers(res.data)
    } catch (error) {
      console.error(error.message);
    }
  }

  const addBurger = async (burger) => {
    const id = uuidv4();
    try {
      const res = await axios.post('http://localhost:3001/burgers', {
        id,
        name: burger,
        votes: 0,
        approved: false,
        created: Date.now(),
        updated: Date.now()
      });
      console.log("RESPONSE: ", res)
      setBurgers([ ...burgers, res.data])
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div className='mainContainer'>
      <h3>New Burger Idea</h3>
      <BurgerForm addBurger={addBurger} />
      <div className="line"></div>
      <header>
        <h1 style={{ fontSize: "300%" }}>Burgers List</h1>
      </header>
      <SortingToolbar />
      <SearchForm />
      {renderBurgers}
    </div>
  )
}

export default MainContainer;
