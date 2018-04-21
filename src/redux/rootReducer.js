//Combines all reducers for the store and exports

import ScrollReducer from "./scroll/scrollReducer";
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    scroll: ScrollReducer,
})

export default rootReducer