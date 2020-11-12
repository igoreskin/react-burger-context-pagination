import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import BurgerView from './BurgerView';
import SortingToolbar from './SortingToolbar';
import BurgerForm from './BurgerForm';
import SearchForm from './SearchForm';
import Spinner from './Spinner';

const MainContainer = () => {

  const [burgers, setBurgers] = useState([]);

  const [alert, setAlert] = useState(false);

  useEffect(() => {fetchBurgers()}, []);

  const fetchBurgers = async () => {
    try {
      const res = await axios.get('http://localhost:3001/burgers');
      console.log("RESPONSE: ", res)
      setBurgers(res.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  const displayAlert = () => {
    setAlert(true);
    setTimeout(() => {setAlert(false)}, 2000)
  }

  const addBurger = async (burger) => {
    const names = [];
    burgers.forEach(el => names.push(el.name))
    console.log("NAMES: ", names)
    const id = uuidv4();
    if (names.includes(burger)) {
      displayAlert() 
    } else {
      try {
        const res = await axios.post('http://localhost:3001/burgers', {
          id,
          name: burger,
          votes: 0,
          approved: false,
          created: Date.now(),
          updated: Date.now()
        });
        setBurgers([ ...burgers, res.data])
      } catch (error) {
        console.error(error.message)
      }
    }
  }

  const approveBurger = async (burger) => {
    try {
      const res = await axios.put(`http://localhost:3001/burgers/${burger.id}`, {
        ...burger, approved: true, created: burger.created, updated: Date.now()
      });
      fetchBurgers()
    } catch (error) {
      console.error(error.message)
    }
  }

  const disapproveBurger = async (burger) => {
    try {
      const res = await axios.put(`http://localhost:3001/burgers/${burger.id}`, {
        ...burger, approved: false, created: burger.created, updated: Date.now()
      });
      fetchBurgers()
    } catch (error) {
      console.error(error.message)
    }
  }

  const upvoteBurger = async (burger) => {
    try {
      const res = await axios.put(`http://localhost:3001/burgers/${burger.id}`, {
        ...burger, votes: burger.votes + 1, created: burger.created, updated: Date.now()
      });
      fetchBurgers()
    } catch (error) {
      console.error(error.message)
  }
}

  const downvoteBurger = async (burger) => {
    try {
      const res = await axios.put(`http://localhost:3001/burgers/${burger.id}`, {
        ...burger, votes: burger.votes - 1, created: burger.created, updated: Date.now()
      });
      fetchBurgers()
    } catch (error) {
      console.error(error.message)
  }
}

  const renderBurgers = burgers.map(burger =>
    <BurgerView
      key={burger.id}
      burger={burger}
      approveBurger={approveBurger}
      disapproveBurger={disapproveBurger}
      upvoteBurger={upvoteBurger}
      downvoteBurger={downvoteBurger}
    />)

  return (
    <div className='mainContainer'>
      <div className="newBurger">
        <h3 onClick={displayAlert}>New Burger Idea</h3>
        {alert && <h3 className="alert">A burger with this name already exists!</h3>}
      </div>
      <BurgerForm addBurger={addBurger} />
      <div className="line"></div>
      <header>
        <h1 style={{ fontSize: "300%" }}>Burgers List</h1>
      </header>
      <SortingToolbar />
      <SearchForm />
      {burgers.length > 0 ? <div>{renderBurgers}</div> : <Spinner />}
    </div>
  )
}

export default MainContainer;
