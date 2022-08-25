import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import { getRandomQuotes ,getTagQuotes} from "./reducers/bookmarkQoutes";
const reducer = combineReducers({
  getRandom: getRandomQuotes,
  getTag: getTagQuotes,
});
const radomQuot = localStorage.getItem("randomQuot")
  ? JSON.parse(localStorage.getItem("randomQuot"))
  : null;
const tagQuot = localStorage.getItem("randomQuot")
  ? JSON.parse(localStorage.getItem("TAGQuot"))
  : null;
const initialState = {
    getRandom: { quote: radomQuot },
    getTag: { tag: tagQuot },

  };
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
export default store;
