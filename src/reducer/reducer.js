import {GET_ACTIVITIES} from '../actions/actions.js'

const initialState ={
    monthlyActivities: [],
    allActivities: []
};
const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_ACTIVITIES:
         return{ ...state, allActivities: action.payload}
        

            default:
            return {...state}
    }
}
export default rootReducer