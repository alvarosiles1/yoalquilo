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

const Pages: SPageListProps = {
    "/": InicioPage,
    "carga": CargaPage,
    "ajustes": AjustesPage,
    ...Services.Pages,
    ...Servicios.Pages,
    ...Page.Pages,
    ...yoalquilo.Pages,
    "login": Login,

    "edificio": Edificio_Registro,
    "administradores": Administradores_Registro,
    "sucursal": Sucursal_Registro,

}


export const Reducers = {
    ...Services.Reducers,
    ...Servicios.Reducers,
    ...Page.Reducers,
    ...yoalquilo.Reducers,

}
export default Pages;