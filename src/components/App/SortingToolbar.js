import React, { useState } from 'react'

const SortingToolbar = () => {

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
        console.log("Sort by created");
        break;

      case 'Name': 
        console.log("Sort by name");
        break;

      case 'Most Popular': 
        console.log("Sort by Most Popular");
        break;

      case 'Least Popular':
        console.log("Sort by Least Popular");
        break;

      case 'Approved':
        console.log("Approved");
        break;
    }
  }

  return (
    <div className="sortingToolbar">
      {renderControls}
    </div>
  )
}

export default SortingToolbar;
