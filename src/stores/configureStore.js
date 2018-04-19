import { createStore } from "redux";
import authorReducer from "../reducers/authorReducer";

export default () => {
  const store = createStore(authorReducer);
  return store;
}