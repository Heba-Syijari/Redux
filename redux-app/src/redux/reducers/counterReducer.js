import { INCREAMENT , DECREAMENT , INC_BY_VALUE} from '../actions/type';

export const counterReducer = (state = {count:0},action) => {
  switch(action.type){
    case INCREAMENT : return {...state ,count : state.count + 1}
    case DECREAMENT : return {...state ,count : state.count - 1}
    case INC_BY_VALUE : return {...state ,count : state.count + action.value}
    default : return state;

  }
}