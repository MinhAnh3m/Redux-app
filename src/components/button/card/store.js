
import { createStore } from "redux";
import rootReducer from "./cartReducer";

const store = createStore(rootReducer);

export default store;

