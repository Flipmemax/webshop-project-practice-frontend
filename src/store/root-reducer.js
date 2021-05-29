import { combineReducers } from "redux";
import productSliceReducer from "./products/reducer";

const reducer = combineReducers({
  all: productSliceReducer,
  // someFeature: someFeatureReducer
  // etc...
});

export default reducer;
