import { SPageListProps } from 'servisofts-component'

import inmueble from './Components/inmueble';
import habitacion from './Components/habitacion';
import servicios from './Components/servicios';


import template from './templates/template';



const ServiceName = "yoalquilo";

const Pages: SPageListProps = {
	// 'template': template,
	...inmueble.Pages,
	...habitacion.Pages,
	...servicios.Pages,

}

const Reducers = {
	...inmueble.Reducers,
	// ...habitacion.Reducers,
	...servicios.Reducers,

}

export default {
	ServiceName,
	Pages,
	Reducers,
};