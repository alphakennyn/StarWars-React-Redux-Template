import initial from "./scrollInitialState";

const reducer = (state = initial, action) => {
  switch (action.type) {
    //Add timeslot to collection
    case 'STOP_SCROLL':
      return {
        ...state,
        position: action.offsetTop,
        intervalID: 0,
      }
    case 'SCROLL_CHANGE':
      return {
        ...state,
        position: action.position,
        //intervalID: 0,
      }
    case 'UPDATE_DIRECTION':
      return {
        ...state,
        direction: action.newDirection,
      }
    default:
      return state;
  }
};
export default reducer;