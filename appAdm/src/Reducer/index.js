import { combineReducers } from 'redux';
import { SStorage } from 'servisofts-component';
import { Reducers } from '../Pages'

const reducers = combineReducers({
    ...Reducers

});

export default (state, action) => {
    switch (action.type) {
        case 'USUARIO_LOGOUT':
            SStorage.removeItem("usr_log");
            state = undefined;
            break;
        default:
            break;
    }
    return reducers(state, action);
}