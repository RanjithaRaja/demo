import {Types} from "../action/type";

const HomeReducer = (state={}, action) => {
    switch(action.type){
        case Types.HOMEDATA:
            return {...state, homeData: action.payload}
        default: 
            return state
    }
}

export default HomeReducer;