import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SLoad, SView } from 'servisofts-component';
import inmueble from '../../../Pages/inmueble';

class Menu_Inicio extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.key = SNavigation.getParam("pipoca");

	}

	getPerfil() {

		this.data = {};
		if (this.key) {
			this.data = inmueble.Actions.getByKey(this.key, this.props);
			if (!this.data) return <SLoad />
		}

		return <>
			<SView col={'xs-6 md-6 lg-6 xl-6'} row center border={'red'}  >
				<SView width={130} height={110} row center
					onPress={() => { SNavigation.navigate('inmueble/registro') }}>
					<SView style={{
						width: 120, height: 120, borderRadius: 20, backgroundColor: "#F6F6F6",
					}} center >
						<SIcon name={'Back'} width={80} height={80} fill={STheme.color.primary} />
					</SView>

					<SView col={'xs-12'} height={18} center backgroundColor={'transparent'}   >
						<SText fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> {this.data.descripcion} </SText>
					</SView>
				</SView>
				<SView width={130} height={20} row center
					onPress={() => { SNavigation.navigate('inmueble/registro', { pollo: this.key }) }}>
					<SView style={{
						width: 120, height: 50, borderRadius: 20, backgroundColor: "#F6F6F6",
					}} center >
						<SText fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> Perfil </SText>
					</SView>
				</SView>


				<SView col={'xs-12'} height={40} />
			</SView>
		</>
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

		this.data = {};
		if (this.key) {
			this.data = inmueble.Actions.getByKey(this.key, this.props);
			if (!this.data) return <SLoad />
		}

		// var data = inmueble.Actions.getByKey(this.key, this.props);
		// if (!data) return <SLoad />


		return (
			<SPage title={'Menu Inicio'}>

				<SView col={"xs-12"} height row center backgroundColor={'transparent'} >

					<SView col={"xs-12"} height={160} row center backgroundColor={'cyan'} >
						<SView col={"xs-12"} height={5} />

						{/* <SText center col={"xs-12"} fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> Tipo: {this.data.tipo}</SText>

						<SText center col={"xs-12"} fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> Condominio: {this.data.descripcion} </SText>

						<SText center col={"xs-12"} fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> Ubiacion: :{this.data.direccion}</SText> */}
						{this.getPerfil()}
					</SView>

					<SView col={"xs-12 md-9 lg-9 xl-9"} row center backgroundColor={'transparent'} >
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