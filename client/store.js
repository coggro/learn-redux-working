import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// import the root reducer
// will look at actions, what they do, and reducers
import rootReducer from "./reducers/index";

import comments from "./data/comments";
import posts from "./data/posts";

// Create an object for the default data.
const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
