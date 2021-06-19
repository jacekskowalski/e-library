const initialValue = {
    val: []
}

export default function selectedBooks(state=initialValue, action:any) {

    switch (action.type) {
        case "GET":
           return  {...state, val: action.payload};
 //  return {...state, val: action.payload}
        case "DELETE":
            return {...state,
                val :state.val.filter((item:any) => item.title !== action.payload)
            }
        case "PUT":
            //   return [...state, val:action.payload];
            return {
                ...state, val: state.val.map((item:any)=> item.id === action.payload.id 
                ? action.payload : item)
            }
        case "ADD":
            return Object.assign({}, state, { val:[...state.val,action.payload]});
 default:
    return state;
    }

}
