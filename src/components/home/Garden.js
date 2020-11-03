import React, { useState, useEffect } from 'react';
// import Inventory from './Inventory';
// import Sunflower from './Produce/Flower1'
import SunflowerStage1 from './imggrowth/sunflower1.png';
import SunflowerStage2 from './imggrowth/sunflower2.png';
import SunflowerStage3 from './imggrowth/sunflower3.png';
import SunflowerStage4 from './imggrowth/sunflower4.png';
// import { connect } from 'react-redux'


const Garden = () => {
    const [stages, setStages] = useState([null, SunflowerStage1, SunflowerStage2, SunflowerStage3, SunflowerStage4])
    const [stageImage, setStage] = useState(null);
    const [clicked, toggleClicked] = useState(false);
    const [stageCounter, setCounter] = useState(0);
    
    const [balance, changeBalance] = useState(0);
    const [valueAtStage, setValues] = useState([0, 10, 20, 50, 2]);

 
    useEffect(() => { 
        console.log('useeffect was run', 'stageCounter status: ', stageCounter);
        if(stageCounter<=4) {
            console.log('made it inside!');
            increaseStage();
        }
    }, [clicked]);

    useEffect(() => { 
        console.log('changing display was run', 'stageImage before: ', stageImage);
        if(stageCounter<=4) {
            console.log('changing stage now! to stage: ', stages[stageCounter]);
            setStage(stages[stageCounter]);
            console.log('stageimage after: ', stageImage);
        }
    }, [stageCounter]);

    useEffect(() => {
        // reset stageCounter to initial
        console.log('reset counter to 0');
        setCounter(0);
    }, []);


    function increaseStage() {
        console.log('stage increased :D');
        let temp = stageCounter + 1;
        console.log('stage before: ', stageCounter);
        setCounter(temp);
        console.log('stageafter: ', stageCounter);
    }

    function toggle() {
        if(clicked) {
            toggleClicked(false);
            console.log('toggled to false');
        } else {
            toggleClicked(true);
            console.log('toggled to true');
        }
    }
  
  return (
    <div className="garden container">
        <div className="row">
            <div className="farm-plot container col s8">
                <div className="row">
                    <div className="single-plot col s5 offset-s1">
                        <img className='flower' src={stageImage} /> 
                    </div>
                    <div className="single-plot col s5"></div>
                </div>
                <div className="row">
                    <div className="single-plot col s5 offset-s1"></div>
                    <div className="single-plot col s5"></div>
                </div>
            </div>
            <div className="inventory container col s3 offset-s1">
                <div className="inventory container row">
                    <div className="inventory-slot btn btn-floating green lighten-1 col s12" onClick={toggle}>Plant</div>
                </div>
                <div className="inventory container row">
                    <div className="inventory-slot btn btn-floating green lighten-1 col s12" onClick={increaseStage}>Sell</div>
                </div>
                {/* <Inventory setStart={setStart}/> */}
            </div>
        </div>
    </div>
  )
}

// const mapStateToProps = (state) => {
//     return {
//         garden: state.garden.gardenPlots
//     }
// }

export default Garden;

{/* <div className="single-plot col s5 offset-s1"></div> */}


// export default connect(mapStateToProps)(Garden);

   // const [setGrowth, setStart] = useState(false);
    // const [plot1, setFlower1] = useState('empty');
    // const [plant, setPlanting] = useState(false);    

// const [plots, setPlots] = useState(['empty', 'empty', 'empty', 'empty']);
// const [seedingPossible, setSeedingPossible] = useState(true);
// const [firstOpen, setFirstOpen] = useState(1);
// const [plantPlant, setToggle] = useState();
// const [plot3, setFlower3] = useState('empty');
// const [plot4, setFlower4] = useState('empty');
// const [plot2, setFlower2] = useState('empty');

// console.log('starting garden: ', plots);
    // function checkIfSeedingPossible() {
    //     setSeedingPossible(false);
    //     console.log('seeding is now: ', seedingPossible);
    //     for(let i = 0; i < 4; i++) {
    //         if(plots[i] === 'empty') {
    //             setSeedingPossible(true);
    //             setFirstOpen(i);
    //             return;
    //         }
    //     }    
    // }

    // useEffect(() => {
    //     checkIfSeedingPossible();
    //     if(seedingPossible) {
    //         // plant sunflower with stage 0
            
    //         // designate plot as 'planted'
    //         plots[firstOpen] = 'planted';
    //         console.log('planted here: ', firstOpen, 'plots array: ', plots);
    //     }
    //     // deactivate start
    //     // setStart(false);
    // }, [startGrowth]);