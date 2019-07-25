// reducer takes in two things:
// 1. the action (what happened)
// 2. a copy of current state

// action, store
// ok, let me see
// return updated copy of store

function posts(state = [], action) {
    switch (action.type) {
        case "INCREMENT_LIKES":
            console.log("Incrementing Likes");
            const i = action.index;
            return [
                ...state.slice(0, i), // before our update
                { ...state[i], likes: state[i].likes + 1 }, // modify likes
                ...state.slice(i + 1) // after our update
            ];
        default:
            return state;
    }
}

export default posts;
