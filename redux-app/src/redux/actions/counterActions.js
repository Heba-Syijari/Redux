import { INCREAMENT ,DECREAMENT,INC_BY_VALUE } from "./type"
export const incrementAction = async(dispatch) =>{
    // return { type: INCREAMENT }
    return dispatch({ type: INCREAMENT })
}
export const incrementActionV = async(v1,dispatch) =>{
    return dispatch({ type: INC_BY_VALUE , value: v1 })
}
export const decrementAction = async(dispatch) =>{
    return dispatch({ type: DECREAMENT })
}