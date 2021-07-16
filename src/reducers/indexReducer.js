import { combineReducers } from "redux";
import selectedPersona from "./selectedOption";
import visibility from "./searchvisible";
import getQuery from "./getQuery";

const rootReducer = combineReducers({
    selectedPersona: selectedPersona,
    visibility: visibility,
    getQuery: getQuery
});

export default rootReducer;
