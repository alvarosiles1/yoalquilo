import { SPageListProps } from 'servisofts-component'

const ServiceName = "yoalquilo";


import empresa from './Components/empresa';
import sucursal from './Components/sucursal';
const Pages: SPageListProps = {
    ...empresa.Pages,
    ...sucursal.Pages

}

const Reducers = {
    ...empresa.Reducers,
    ...sucursal.Reducers


}

export default {
    ServiceName,
    Pages,
    Reducers,
};