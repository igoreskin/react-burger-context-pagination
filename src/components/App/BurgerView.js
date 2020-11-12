import React from 'react';

const BurgerView = ({ burger }) => {

  const handleUpClick = () => {
    console.log('UPVOTE: ', burger.id)
  }

  const handleDownClick = () => {
    console.log('DOWNVOTE: ', burger.id)
  }

  return (
    <div className={burger.approved ? 'burgerView approved': 'burgerView'}>
      <p className="votes">{burger.votes}</p>
      <p className="burgerName">{burger.name}</p>
      <div className="arrows">
        <i className="fas fa-angle-up" onClick={handleUpClick}></i>
        <i className="fas fa-angle-down" onClick={handleDownClick}></i>
      </div>
    </div>
  )
}

export default BurgerView;
