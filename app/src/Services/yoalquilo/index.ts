import { SPageListProps } from 'servisofts-component'
import template from './templates/template';
import inmueble from './Components/inmueble';
import habitacion from './Components/habitacion';
import servicios from './Components/servicios';
import cliente from './Components/cliente';

const ServiceName = "yoalquilo";

const Pages: SPageListProps = {
	'template': template,
	...inmueble.Pages,
	...habitacion.Pages,
	...servicios.Pages,
	...cliente.Pages,

}

const Reducers = {
	...inmueble.Reducers,
	...servicios.Reducers,
	...cliente.Reducers,

}

export default {
	ServiceName,
	Pages,
	Reducers,
};