const assesmentReducer = (state, action) => {
    switch (action.type) {
        case 'VERIFY': {
            return {...state, verify: action.payload, error: {enabled: false, message: ""}}
        }
        case 'VERIFY_ERROR': {
            return {...state, error: {enabled: true, message: action.payload}}
        }
        case 'SET_LOADING': {
            return {...state, loading: action.payload}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
};

export default assesmentReducer;