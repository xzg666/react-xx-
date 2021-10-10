 import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";

 //对reducer拆分然后合并的
 const cReducer = combineReducers({
    recommend:recommendReducer 
 });

 export default cReducer;