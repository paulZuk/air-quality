import {GET_DATA, GET_DETAIL_DATA, SET_NOTIFICATION} from "../constants";
import avgRisk from '../components/calculations/average_risk';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_DATA:
            let newState = {...state, primaryData: action.payload.data};
            // console.log(newState);
            return newState;
        case GET_DETAIL_DATA:
            newState = {...state, detailActive: action.payload.data};
            // console.log(newState);
            return newState;
        case SET_NOTIFICATION:
            let notification = {};
            let averageRisk = avgRisk(state.primaryData);

            if (averageRisk >= 5) {

                notification.text= "ALARM !!! Maksik zakłada maskę gazową !!!";
                notification.color = "red";

            } else if (averageRisk >=4) {
                notification.text = "Tragedia Maksik zostaje w domu !!!";
                notification.color="red";
            } else if (averageRisk >= 3) {
                notification.text = "Zła jakość powietrza Maksik powinien zostać w domu";
                notification.color="orange";
            } else if (averageRisk >= 2) {
                notification.text = "Szału nie ma ale mozna iść na spacer :)";
                notification.color="gold";
            } else {
                notification.text = "Powietrze dobre Maksik idzie na spacer :)";
                notification.color="green";
            }

            newState = {...state, notification};
            return newState;

        default:
            return state;
    }
}