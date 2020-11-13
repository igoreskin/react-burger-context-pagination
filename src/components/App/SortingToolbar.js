import React, { useState } from 'react'

const SortingToolbar = (props) => {

  const [selectedControl, setSelectedControl] = useState(0);

  const controls = ['Created', 'Name', 'Most Popular', 'Least Popular', 'Approved'];

  const renderControls = controls.map(control => 
    <div 
      className={controls.indexOf(control) === 4 ? "control-right" : "control"}
      key={control}
      onClick={(e) => { setSelectedControl(controls.indexOf(control)); sortBurgers(e.target.textContent)}}
      style={{ backgroundColor: selectedControl === controls.indexOf(control) && '#95BCF2'}}
    >
      {control}
    </div>
  )

  const sortBurgers = (control) => {
    switch(control) {
      case 'Created':
        props.sortByCreated()
        break;

      case 'Name': 
        props.sortByName()
        break;

      case 'Most Popular': 
        props.sortMostPopular();
        break;

      case 'Least Popular':
        props.sortLeastPopular();
        break;

      case 'Approved':
        props.displayApproved();
        break;

      default:
        console.log("No selection")
    }
  }

  return (
    <div className="sortingToolbar">
      {renderControls}
    </div>
  )
}

export default SortingToolbar;
