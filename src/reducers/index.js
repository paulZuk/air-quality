import {GET_DATA, GET_DETAIL_DATA} from "../constants";

export default (state = {}, action) => {
    switch (action.type) {
        case GET_DATA:
            let newState = {...state, primaryData: action.payload.data};
            console.log(newState);
            return newState;
        case GET_DETAIL_DATA:
            newState = {...state, detailActive: action.payload.data};
            console.log(newState);
            return newState;
        default:
            return state;
    }
}