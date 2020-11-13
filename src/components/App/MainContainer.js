import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import actions from '../../actions';
import BurgerView from './BurgerView';
import SortingToolbar from './SortingToolbar';
import BurgerForm from './BurgerForm';
import SearchForm from './SearchForm';
import Spinner from './Spinner';
import BurgerContext from '../../context';

const MainContainer = () => {

  const { state, dispatch } = useContext(BurgerContext);

  const [alert, setAlert] = useState(false);

  useEffect(() => {fetchBurgers()}, []);

  const fetchBurgers = async () => {
    try {
      const res = await axios.get('http://localhost:3001/burgers');
      console.log("RESPONSE: ", res)
      dispatch({ type: "FETCH_BURGERS", payload: res.data })
    } catch (error) {
      console.error(error.message);
    }
  }

  const displayAlert = () => {
    setAlert(true);
    setTimeout(() => {setAlert(false)}, 2000)
  }

  const addBurger = async (burger) => {
    if (burger.length < 1) return;
    const names = [];
    state.burgers.forEach(el => names.push(el.name))
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
        dispatch({ type: 'ADD_BURGER', payload: res.data})
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
    } catch (error) {
      console.error(error.message)
    }
  }

  const disapproveBurger = async (burger) => {
    try {
      const res = await axios.put(`http://localhost:3001/burgers/${burger.id}`, {
        ...burger, approved: false, created: burger.created, updated: Date.now()
      });
    } catch (error) {
      console.error(error.message)
    }
  }

  const upvoteBurger = async (burger) => {
    try {
      const res = await axios.put(`http://localhost:3001/burgers/${burger.id}`, {
        ...burger, votes: burger.votes + 1, created: burger.created, updated: Date.now()
      });
    } catch (error) {
      console.error(error.message)
  }
}

  const downvoteBurger = async (burger) => {
    try {
      const res = await axios.put(`http://localhost:3001/burgers/${burger.id}`, {
        ...burger, votes: burger.votes - 1, created: burger.created, updated: Date.now()
      });
    } catch (error) {
      console.error(error.message)
    }
  }

  const sortByCreated = () => {
    dispatch({ type: 'SORT_BY_CREATED' });
  }

  const sortByName = () => {
    dispatch({ type: 'SORT_BY_NAME'});
  }

  const sortMostPopular = () => {
    dispatch({ type: 'SORT_MOST_POPULAR'});
  }

  const sortLeastPopular = () => {
    dispatch({ type: 'SORT_LEAST_POPULAR' });
  }

  const displayApproved = () => {
    dispatch({ type: 'DISPLAY_APPROVED' });
  }

  console.log('STATE: ', state)

  const renderBurgers = state.burgers.map(burger =>
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
      <SortingToolbar 
        sortByCreated={sortByCreated} 
        sortByName={sortByName} 
        sortMostPopular={sortMostPopular} 
        sortLeastPopular={sortLeastPopular} 
        displayApproved={displayApproved}
      />
      <SearchForm />
      {state.burgers.length > 0 ? <div>{renderBurgers}</div> : <Spinner />}
    </div>
  )
}

export default MainContainer;
