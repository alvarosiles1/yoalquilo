import { SPageListProps } from 'servisofts-component'
import cliente from './Components/cliente';
import empresa from './Components/empresa';
import servicio from './Components/servicio';
import sucursal from './Components/sucursal';

const ServiceName = "yoalquilo";

const Pages: SPageListProps = {
    ...empresa.Pages,
    ...sucursal.Pages,
    ...cliente.Pages,
    ...servicio.Pages

}

const Reducers = {
    ...empresa.Reducers,
    ...sucursal.Reducers,
    ...cliente.Reducers,
    ...servicio.Reducers

}

export default {
    ServiceName,
    Pages,
    Reducers,
};