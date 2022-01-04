import { SPageListProps } from 'servisofts-component'

import Services from '../Services';

import InicioPage from "./InicioPage";
import CargaPage from './CargaPage/index';
import AjustesPage from './AjustesPage';
import Servicios from './Servicios';
import Page from './Page';
import yoalquilo from '../Services/yoalquilo';

const Pages: SPageListProps = {
    "/": InicioPage,
    "carga": CargaPage,
    "ajustes":AjustesPage,
    ...Services.Pages,
    ...Servicios.Pages,
    ...Page.Pages,
    ...yoalquilo.Pages,
}


export const Reducers = {
    ...Services.Reducers,
    ...Servicios.Reducers,
    ...Page.Reducers,
    ...yoalquilo.Reducers,

}
export default Pages;