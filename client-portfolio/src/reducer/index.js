import { CHANGE_LANGUAGE } from "../actions"

const initialState = {
    english:true 
    
}

function rootReducer (state=initialState,action){
 switch(action.type){
    case CHANGE_LANGUAGE:
        let boolean = state.english
        return{
            english: !boolean
        }
        default:
            return{...state}
}}


export default rootReducer