import { combineReducers } from "redux";
import productSliceReducer from "./products/reducer";
import userSliceReducer from "./auth/reducer";

const reducer = combineReducers({
  all: productSliceReducer,
  user: userSliceReducer,
  // someFeature: someFeatureReducer
  // etc...
});

export default reducer;
