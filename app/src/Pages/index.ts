import { SPageListProps } from 'servisofts-component'

import Services from '../Services';

import InicioPage from "./InicioPage";
import CargaPage from './CargaPage/index';
import AjustesPage from './AjustesPage';
import Servicios from './Servicios';
import Page from './Page';
import yoalquilo from '../Services/yoalquilo';
import Login from '../Services/Usuario/Components/usuario/Pages/Login';
import Edificio_Registro from './InicioPage/Edificio_Registro';
import Administradores_Registro from './InicioPage/Administradores_Registro';
import Sucursal_Registro from './InicioPage/Sucursal_Registro';
import HomePage from './HomePage';
import inmueble from '../Services/yoalquilo/Components/inmueble';

// import Cliente from '../Services/yoalquilo/Components/cliente/Pages/Lista';
// import inmueble from '../Services/yoalquilo/Components/inmueble/Pages/Lista';



const Pages: SPageListProps = {

  

     "/": HomePage,

    ...Services.Pages,
    "carga": CargaPage,
    "ajustes": AjustesPage,
    // ...yoalquilo.Pages,


    // ...Servicios.Pages,
    // ...Page.Pages,
    // "login": Login,

    // "edificio": Edificio_Registro,
    // "administradores": Administradores_Registro,
    // "sucursal": Sucursal_Registro,

}


export const Reducers = {
    ...Services.Reducers,
    ...Servicios.Reducers,
    ...Page.Reducers,
    ...yoalquilo.Reducers,

}
export default Pages;