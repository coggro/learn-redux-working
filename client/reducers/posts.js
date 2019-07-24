// reducer takes in two things:
// 1. the action (what happened)
// 2. a copy of current state

// action, store
// ok, let me see
// return updated copy of store

function posts(state = [], action) {
    console.log("The post will change");
    console.log(state, action);
    return state;
}

export default posts;
