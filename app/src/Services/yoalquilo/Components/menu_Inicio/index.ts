const component = "bbbbbbbbbbbbbbbbbbbbbb"; // no te olvides de cambiar ******************************************
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import Menu from "./Pages/Menu_Inicio";


export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        "menu": Menu,


    }
}