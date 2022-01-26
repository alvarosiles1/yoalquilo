import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';

const INMUEBLES = {
	"1": {
		key: "1",
		descripcion: "Santa Maria 1",
		direccion: "Calle 2 # 2-2",
		tipo: "Condominio",
		icono: "IconMenuCondominio",

	},

	"2": {
		key: "2",
		descripcion: "Santa Maria 2",
		direccion: "Calle 2 # 2-2",
		tipo: "Departamento",
		icono: "IconMenuEdificio",

	},
	"3": {
		key: "2",
		descripcion: "Santa Maria 2",
		direccion: "Calle 2 # 2-2",
		tipo: "Departamento",
		icono: "IconMenuCasa",

	}, "4": {
		key: "2",
		descripcion: "Santa Maria 2",
		direccion: "Calle 2 # 2-2",
		tipo: "Departamento",
		icono: "IconMenuHotel",

	}, "5": {
		key: "2",
		descripcion: "Santa Maria 2",
		direccion: "Calle 2 # 2-2",
		tipo: "Departamento",
		icono: "IconMenuMotel",

	},
}

class Menu_Inmueble extends Component {
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


	getLista2() {
		return Object.keys(INMUEBLES).map(key => {
			var obj = INMUEBLES[key];
			return <>
				<SView col={'xs-6 md-4 lg-3 xl-2'} row center border={'transparent'}  >
					<SView width={130} height={150} row center
						onPress={() => { SNavigation.navigate(url) }}>
						<SView style={{
							width: 120, height: 120, borderRadius: 20, backgroundColor: "#F6F6F6",
						}} center >

							<SView width={'100%'} height={'100%'} style={{
								position: "absolute",
							}} center>
								<SIcon name={'IMenuInmueble'} width={80} height={80} fill={STheme.color.primary} />
							</SView>

							<SIcon name={'IconMenuBg'} width={"100%"} />
						</SView>

						<SView col={'xs-12'} height={18} center backgroundColor={'transparent'}   >
							<SText fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> Santa Maria 2 </SText>
							<SText fontSize={12} font={"Roboto-Light"} color={'#BEB2B2'} style={{ textTransform: "capitalize" }}>Calle 2 # 2-2</SText>
						</SView>
					</SView>
					<SView col={'xs-12'} height={40} />
				</SView>


			</>
		})
	}

	render() {
		return (
			<SPage title={'Menu Inicio'}>

				<SView height={18} />

				<SView col={"xs-12"} height row center backgroundColor={'transparent'} >
					<SView col={"xs-12 md-9 lg-9 xl-9"} row center backgroundColor={'transparent'} >

						{this.getLista2()}

					</SView>

				</SView>

			</SPage >
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Menu_Inmueble);