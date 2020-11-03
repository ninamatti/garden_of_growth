import React, { useState, useEffect } from 'react';
//import SunflowerStage0 from './imggrowth/sunflower1.png';
//import SunflowerStage1 from './imggrowth/sunflower2.png';
//import SunflowerStage2 from './imggrowth/sunflower3.png';
//import SunflowerStage3 from './imggrowth/sunflower4.png';


const Sunflower = ({plot1, setFlower1}) => {
  //const [ allStages, setStages ] = useState([SunflowerStage0, SunflowerStage1, SunflowerStage2, SunflowerStage3]);
  //const [ stageImage, setImage ] = useState(SunflowerStage0);
  const [ stageIndex, setStage ] = useState(0);

//   let interval = setInterval(() => {
//       setImage(allStages[stageIndex]);
//       console.log('timer is running')
//       while(stageIndex < 4) {
//           let temp = stageIndex + 1;
//           setStage(temp);
//           console.log('now at stage ', stageIndex);
//       }
//       if(stageIndex > 3) {
//           endGrowth();
//       }
//     }, 10000);
  
//   function startGrowth() {
//     interval();
//   }

//   function endGrowth() {
//       clearInterval(interval);
//   }
  if (plot1 === 'empty') {
    return (
        <div className="flower container">
        </div>
      )
  } else {
      setFlower1()
      return (
        <div className="flower container">
            {/* <img className='flower' src={stageImage} />  */}
        </div>
      )
  }
  
  
}

export default Sunflower;