import { SPageListProps } from 'servisofts-component'

import menuInicio from './Components/menu_Inicio';
import menuInmueble from './Components/menu_Inmueble';
import splash from './Components/splash';

import inmueble from './Pages/inmueble';




const ServiceName = "yoalquilo";

const Pages: SPageListProps = {

	...inmueble.Pages,

	...menuInicio.Pages,
	// ...menuInmueble.Pages,
	...splash.Pages,
	// ...inquilino.Pages,
	// ...reporte.Pages,
	// ...reserva.Pages,
	// ...servicio.Pages

}

const Reducers = {
	...menuInicio.Reducers,
	// ...menuInmueble.Reducers,
	...splash.Reducers,
	// ...inquilino.Reducers,
	...inmueble.Reducers,
	// ...reporte.Reducers,
	// ...reserva.Reducers,
	// ...servicio.Reducers

}

export default {
	ServiceName,
	Pages,
	Reducers,
};