let initState = [];

export default function todoReducers(state = initState, action) {
    switch (action.type) {
        case "FETCH_REQUEST":
            return state;
        case "FETCH_SUCCESS":
            return { ...state, posts: action.payload };
        default:
            return state;
    }
} 