import React, { useState, useEffect } from 'react';
import SunflowerStage1 from './imggrowth/sunflower1.png';
import SunflowerStage2 from './imggrowth/sunflower2.png';
import SunflowerStage3 from './imggrowth/sunflower3.png';
import SunflowerStage4 from './imggrowth/sunflower4.png';


const Sunflower = () => {
  const [ allStages, setStages ] = useState([SunflowerStage1, SunflowerStage2, SunflowerStage3, SunflowerStage4 ]);
  const [ stageImage, setImage ] = useState(SunflowerStage1);
  const [ stageIndex, setStage ] = useState(0);

  

  return (
    <div className="flower container">
      
        <img className='flower' src={SunflowerStage1} />
      
    </div>
  )
}

export default Sunflower;