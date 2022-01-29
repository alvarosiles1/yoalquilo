import { SPageListProps } from 'servisofts-component'

import menuInicio from './Components/menu_Inicio';
import menuInmueble from './Components/menu_Inmueble';
import splash from './Components/splash';

import inmueble from './Pages/inmueble';
import template from './templates/template';

import habitacion from './Components/habitacion';



const ServiceName = "yoalquilo";

const Pages: SPageListProps = {
	'template': template,

	...inmueble.Pages,
	...habitacion.Pages,

	...menuInicio.Pages,
	// ...menuInmueble.Pages,
	...splash.Pages,

	// ...inquilino.Pages,
	// ...reporte.Pages,
	// ...reserva.Pages,
	// ...servicio.Pages

}

const Reducers = {
	...inmueble.Reducers,
	...habitacion.Reducers,

	...menuInicio.Reducers,
	// ...menuInmueble.Reducers,
	...splash.Reducers,


}

export default {
	ServiceName,
	Pages,
	Reducers,
};