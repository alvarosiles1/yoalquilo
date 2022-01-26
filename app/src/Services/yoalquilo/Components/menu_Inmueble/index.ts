const component = "menuInmueble"; // no te olvides de cambiar ******************************************
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import MenuInmueble from "./Pages/Menu_Inmueble";


export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        "inmueble": MenuInmueble,


    }
}