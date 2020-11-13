import React, { useState, useRef } from 'react';

const BurgerForm = ( {addBurger }) => {

  const [newBurger, setNewBurger] = useState('');

  const refContainer = useRef('');

  const handleChange = e => {
    setNewBurger(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    addBurger(newBurger);
    setNewBurger('');
    refContainer.current.focus();
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={newBurger} ref={refContainer} onChange={handleChange} />
        <input type="submit" value="Save" />
      </form>
      
    </div>
  )
}

export default BurgerForm;
