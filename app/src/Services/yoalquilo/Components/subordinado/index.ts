//  COMPONENT CONFIG
const component = "subordinado"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";

import Lista from "./Pages/Lista.js";
import Registro from "./Pages/Registro.js";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component]: Lista,
        [component + "/registro"]: Registro,
    }
}