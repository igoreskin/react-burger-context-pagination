import React from 'react';

const BurgerView = ({ burger, approveBurger, disapproveBurger, upvoteBurger, downvoteBurger }) => {

  const handleNameClick = () => {
    burger.approved ? disapproveBurger(burger) : approveBurger(burger)
  }

  const handleUpClick = () => {
    console.log('UPVOTE: ', burger.id)
    upvoteBurger(burger);
  }

  const handleDownClick = () => {
    console.log('DOWNVOTE: ', burger.id)
    downvoteBurger(burger);
  }

  return (
    <div className={burger.approved ? 'burgerView approved': 'burgerView'}>
      <p className="votes">{burger.votes}</p>
      <p className="burgerName" onDoubleClick={handleNameClick}>{burger.name}</p>
      <div className="arrows">
        <i className="fas fa-angle-up" onClick={handleUpClick}></i>
        <i className="fas fa-angle-down" onClick={handleDownClick}></i>
      </div>
    </div>
  )
}

export default BurgerView;
