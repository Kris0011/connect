// store.js
import { createStore } from "redux";
import userReducer from "./reducers/userReducer";

const store = createStore(userReducer);

// // Check if the user is authenticated (you might get this from a cookie or elsewhere)
// const isAuthenticated = /* logic to determine if user is authenticated */;

// // If authenticated, dispatch the SET_USER action
// if (isAuthenticated) {
//   store.dispatch({ type: "SET_USER", payload: /* user data */ });
// }

export default store;
