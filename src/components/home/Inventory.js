import React from 'react';




const Inventory = () => {

  function plantNew() {
    console.log('PlantNew was clicked!! >:D');
    // setStart(true);
    console.log('growth started!! :D');
  }

  return (
    <div className="inventory container row">
       <div className="inventory-slot btn btn-floating green lighten-1 col s12" onClick={plantNew}>Plant</div>
       {/* <div className="inventory-slot btn btn-floating green lighten-1 col s12">Item 2</div>
       <div className="inventory-slot btn btn-floating green lighten-1 col s12">Item 3</div>
       <div className="inventory-slot btn btn-floating green lighten-1 col s12">Item 4</div> */}
    </div>
  )
}

export default Inventory;




