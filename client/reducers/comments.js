// reducer takes in two things:
// 1. the action (what happened)
// 2. a copy of current state

// action, store
// ok, let me see
// return updated copy of store

function postComments(state = [], action) {
    switch (action.type) {
        case "ADD_COMMENT":
            return [
                ...state,
                {
                    user: action.author,
                    text: action.comment
                }
            ];
        case "REMOVE_COMMENT":
            return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
        default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    // console.log(state, action);
    if (typeof action.postId !== "undefined") {
        return {
            // take current state
            ...state,
            //overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        };
    }
    return state;
}

export default comments;
