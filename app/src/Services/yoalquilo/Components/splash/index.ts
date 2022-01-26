const component = "aaaaaaaaaaaaaaaaaaaaaaaaaaa"; // no te olvides de cambiar ******************************************
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import Splash1 from "./Pages/Splash1";
import Splash2 from "./Pages/Splash2";
import Splash3 from "./Pages/Splash3";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        "splash1": Splash1,
        "splash2": Splash2,
        "splash3": Splash3,

    }
}