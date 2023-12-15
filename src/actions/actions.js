import {fetchData, monthDetail, threeLastMonths} from "../services/stravaService"
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const GET_DETAIL = 'GET_DETAIL'
export const GET_TRIMESTER = 'GET_TRIMESTER'
//TRAER TODOS
export function getActivities(){
    return async function(dispatch){
   const response = await fetchData()
   return dispatch({
   type: GET_ACTIVITIES,
    payload: response,
 });
 }
}
//TRAER LOS DE UN MES ESPECIFICO
export function getMonthDetail(month){
    return async function(dispatch){
   const response = await monthDetail(month)
   return dispatch({
   type: GET_DETAIL,
    payload: response,
 });
 }
}
//TRAER LOS ULTIMOS TRES MESES
export function getThreeMonths(){
    return async function(dispatch){
   const response = await threeLastMonths()
   return dispatch({
   type: GET_TRIMESTER,
    payload: response,
 });
 }
}

