import Sunflower from "../../components/home/Produce/Flower1";

const initState = {
    gardenPlots: [
        {id: 1, produce: 'Sunflower', stage: 0},
        {id: 2, produce: 'Sunflower', stage: 1},
        {id: 3, produce: 'Sunflower', stage: 2},
        {id: 4, produce: 'Sunflower', stage: 3},
    ]
}

const gardenReducer = (state = initState, action) => {
    return state
}

export default gardenReducer;