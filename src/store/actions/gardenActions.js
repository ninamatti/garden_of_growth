export const createPlant = (plant) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'CREATE_PLANT', plant})
    }
}