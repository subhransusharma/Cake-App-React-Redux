import { BUY_ICECREAM } from "./icecreamTypes"

const initialStateIcecream = {
    numberOfIceCreams : 20
}

const iceCreamReducer = (state = initialStateIcecream, action) => {
    switch(action.type) {
        case BUY_ICECREAM: 
        return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams > 0 ? state.numberOfIceCreams - 1 : 0
        }
        default: return state
    }
}

export default iceCreamReducer