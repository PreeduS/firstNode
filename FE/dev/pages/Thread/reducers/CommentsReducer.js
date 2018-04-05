

const CommentsReducer =( state = {
    comments: []
}, action) =>{

    switch(action.type) {
        case 'ADD_COMMENT':
        return {
            ...state,
            comments: [
                action.payload,
                ...state.comments
            ]
        };

        case 'LOAD_COMMENTS':
            return {
                ...state,
                comments: action.payload
            };
        
            
    }
    return state;

}

export default CommentsReducer;