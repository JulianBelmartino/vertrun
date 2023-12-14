import fetchData from "../services/stravaService"
export const GET_ACTIVITIES = 'GET_ACTIVITIES'


export function getActivities(){
    return async function(dispatch){
   const response = await fetchData()
   return dispatch({
   type: GET_ACTIVITIES,
    payload: response,
 });
 }
}
 