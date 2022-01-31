import { SPageListProps } from 'servisofts-component'

import inmueble from './Components/inmueble';


import template from './templates/template';

// import habitacion from './Components/habitacion';


const ServiceName = "yoalquilo";

const Pages: SPageListProps = {
	'template': template,
	...inmueble.Pages,
	// ...habitacion.Pages,

}

const Reducers = {
	...inmueble.Reducers,
	// ...habitacion.Reducers,

}

export default {
	ServiceName,
	Pages,
	Reducers,
};