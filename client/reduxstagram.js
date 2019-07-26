import React from "react";

import { render } from "react-dom";

// Import css
import css from "./styles/style.styl";

// Import Components
import App from "./components/App";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux"; // bindings allow us to use redux with react
import store, { history } from "./store";

// import Raven from "raven-js";
// import { sentry_url, logException } from "./data/config";

// Raven.config(sentry_url, {
//     tags: {
//         git_commit: "something",
//         userLevel: "editor"
//     }
// }).install();

// logException(
//     new Error("download failed!", {
//         email: "wesbos@gmail.com"
//     })
// );

// Raven.captureMessage("Something bad happened!");

// Raven.showReportDialog();

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid} />
                <Route path="/view/:postId" component={Single} />
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById("root"));
