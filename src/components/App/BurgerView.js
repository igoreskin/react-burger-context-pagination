import React, { useState } from 'react';

const BurgerView = ({ burger, approveBurger, disapproveBurger, upvoteBurger, downvoteBurger }) => {

  const [approved, setApproved] = useState(burger.approved);

  const [votes, setVotes] = useState(burger.votes)

  const handleNameClick = () => {
    approved ? disapproveBurger(burger) : approveBurger(burger)
    setApproved(!approved);
  }

  const handleUpClick = () => {
    console.log('UPVOTE: ', burger.id)
    setVotes(votes + 1)
    upvoteBurger(burger);
  }

  const handleDownClick = () => {
    console.log('DOWNVOTE: ', burger.id)
    votes > 0 && setVotes(votes - 1);
    votes > 0 && downvoteBurger(burger);
  }

  return (
    <div className={approved ? 'burgerView approved' : 'burgerView'}>
      <p className="votes">{votes >= 0 ? votes : 0}</p>
      <p className="burgerName" onDoubleClick={handleNameClick}>{burger.name}</p>
      <div className="arrows">
        <i className="fas fa-angle-up" onClick={handleUpClick}></i>
        <i className="fas fa-angle-down" onClick={handleDownClick}></i>
      </div>
    </div>
  )
}

export default BurgerView;
