import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SLoad, SView } from 'servisofts-component';
import FloatButtom from '../../../../../Components/FloatButtom';
import Servicios from '..';

class Lista extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.key_inmueble = SNavigation.getParam("key_inmueble");

	}

	getListServicios = () => {


		var lista = Servicios.Actions.getAll(this.props);
		if (!lista) return <SText>Cargando</SText>

		if (Object.keys(lista).length == 0) {
			// SNavigation.navigate("servicios/registro");

			SNavigation.navigate("servicios/registro", { key_inmueble: this.key_inmueble });


			return <SText>No hay inmuebles</SText>
		}

		return Object.keys(lista).map(key => {
			if (lista[key].tipo != '2') return null
			var obj = lista[key];
			return <>
				<SView col={'xs-11 md-8 lg-6 xl-4'} row center border={'#BBA4A4'} style={{ borderRadius: 8, }}  >
					<SView col={'xs-10'} height={60} row center>
						<SView col={'xs-3 md-2 lg-2 xl-2'} row center>
							<SView style={{ width: 48, height: 48, borderRadius: 50, backgroundColor: "blue", }} row center >


								<SIcon name={Servicios.Actions.getIconServicios(obj.descripcion)} width={20} height={20} fill='white' />
							</SView>
						</SView>
						<SView col={'xs-9 md-10 lg-10 xl-10'} row center  >
							<SView col={'xs-12 '}   >
								< SText fontSize={18} font={"Roboto"} color={'#111111'} Bold > {obj.descripcion}</SText>
								< SText fontSize={14} font={"Roboto-Light"} color={'#666666'} > Precio {lista[key].precio} Bs  </SText>
							</SView>
						</SView>
					</SView>
					<SView col={'xs-2'} row center>
						<SView width={100} height={30} row center onPress={() => { SNavigation.navigate('servicios/registro', { key_inmueble: this.key_inmueble, key: obj.key }) }}>
							<SIcon name={'IconEdit'} fill='none' width={18} />
						</SView>
					</SView>
				</SView>
				<SView col={'xs-12'} height={10} />
			</>
		})
	}

	render() {
		return (<>
			<SPage title={'Mis servicios'}>

				<SView col={'xs-12'} height={40} />
				<SView col={"xs-12 "} center>
					{this.getListServicios()}
				</SView>

			</SPage>

			<FloatButtom onPress={() => {
				SNavigation.navigate("servicios/registro", { key_inmueble: this.key_inmueble })

			}} />	</>
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Lista);