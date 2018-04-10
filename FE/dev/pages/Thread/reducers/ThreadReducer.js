import actionTypes from '../actionTypes';


const initialState = {
    comments:[],
    thread:{
        activeTextarea: {currentId: null, active: false}
    }
   
}

const setActiveTextarea = id => state =>{
    let prevId = state.activeTextarea.currentId;
    let isActive = state.activeTextarea.active;
    if(prevId === id){
        isActive = !isActive;
    }else{
        isActive = true;
    }

    let newState = {
        ...state,
        activeTextarea:{
            ...state.activeTextarea,
            currentId: id,
            active: isActive
        }

    };
    console.log('newstate -----------------', newState.activeTextarea)
    return newState;
}


const ThreadReducer =( state = initialState.thread, action) =>{

    switch(action.type) {
        
        case actionTypes.setActiveTextarea:
            return setActiveTextarea(action.payload)(state);
        
           /* return {
                ...state,
                activeTextarea: {
                    ...state.activeTextarea,
                    currentId: action.payload//,
                   // active: action.payload.active,
                }
            }*/
          
    }
    return state;

}

export default ThreadReducer;