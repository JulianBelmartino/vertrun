import {GET_ACTIVITIES, GET_TRIMESTER, GET_DETAIL} from '../actions/actions.js'

const initialState ={
    threeLastMonths: [],
    monthlyActivities: [],
    allActivities: []
};
const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_ACTIVITIES:
         return{ ...state, allActivities: action.payload}

         case GET_TRIMESTER:
         return{ ...state, threeLastMonths: action.payload}

         case GET_DETAIL:
         return{ ...state, monthlyActivities: action.payload}
        

            default:
            return {...state}
    }
}
export default rootReducer