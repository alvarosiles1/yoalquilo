
import yoalquilo from './yoalquilo';
import Usuario from './Usuario';
import Roles_permisos from './Roles_permisos';
const Pages = {
    ...yoalquilo.Pages,
    ...Usuario.Pages,
    ...Roles_permisos.Pages,
}

const Reducers = {
    ...yoalquilo.Reducers,
    ...Usuario.Reducers,
    ...Roles_permisos.Reducers,
}

export default {
    Pages,
    Reducers
}