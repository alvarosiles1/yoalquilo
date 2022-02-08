import { SPageListProps } from 'servisofts-component'
// import template from './templates/template';
import inmueble from './Components/inmueble';
import habitacion from './Components/habitacion';
import servicios from './Components/servicios';
import cliente from './Components/cliente';
import cliente_subordinado from './Components/cliente_subordinado';




const ServiceName = "yoalquilo";

const Pages: SPageListProps = {
	// 'template': template,
	...inmueble.Pages,
	...habitacion.Pages,
	...servicios.Pages,
	...cliente.Pages,
	...cliente_subordinado.Pages,

}

const Reducers = {
	...inmueble.Reducers,
	...servicios.Reducers,
	...cliente.Reducers,
	...cliente_subordinado.Reducers,

}

export default {
	ServiceName,
	Pages,
	Reducers,
};