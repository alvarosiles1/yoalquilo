import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';

class Menu_Inicio extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	getList(icono, descripcion, url) {
		return <>
			<SView col={'xs-6 md-4 lg-3 xl-2'} row center border={'transparent'}  >
				<SView width={130} height={150} row center
					onPress={() => { SNavigation.navigate(url) }}>
					<SView style={{
						width: 120, height: 120, borderRadius: 20, backgroundColor: "#F6F6F6",
					}} center >
						<SIcon name={icono} width={80} height={80} fill={STheme.color.primary} />
					</SView>

					<SView col={'xs-12'} height={18} center backgroundColor={'transparent'}   >
						<SText fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> {descripcion} </SText>
					</SView>
				</SView>
				<SView col={'xs-12'} height={40} />
			</SView>
		</>
	}


	render() {
		return (
			<SPage title={'Menu Inicio'}>

				<SView height={18} />

				<SView col={"xs-12"} height row center backgroundColor={'transparent'} >
					<SView col={"xs-12 md-9 lg-9 xl-9"} row center backgroundColor={'transparent'} >
						{this.getList('IMenuInmueble', 'Inmueble', 'splash2')}
						{this.getList('IMenuHabitacion', 'Habitación', 'splash2')}
						{this.getList('IMenuServicio', 'Servicios', 'splash2')}
						{this.getList('IMenuInquilino', 'Inquilino', 'inquilino')}
						{this.getList('IMenuPago', 'Pago', 'splash2')}
						{this.getList('IMenuReserva', 'Reserva', 'splash2')}
						{this.getList('IMenuReporte', 'Reporte', 'splash2')}
					</SView>

				</SView>

			</SPage >
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Menu_Inicio);