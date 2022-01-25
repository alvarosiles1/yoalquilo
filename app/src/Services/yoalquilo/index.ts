import { SPageListProps } from 'servisofts-component'

import inmueble from './Components/splash';
import pago from './Pages/pago';



const ServiceName = "yoalquilo";

const Pages: SPageListProps = {
	...inmueble.Pages,
	// ...inquilino.Pages,
	...pago.Pages,
	// ...reporte.Pages,
	// ...reserva.Pages,
	// ...servicio.Pages

}

const Reducers = {
	...inmueble.Reducers,
	// ...inquilino.Reducers,
	...pago.Reducers,
	// ...reporte.Reducers,
	// ...reserva.Reducers,
	// ...servicio.Reducers

}

export default {
	ServiceName,
	Pages,
	Reducers,
};