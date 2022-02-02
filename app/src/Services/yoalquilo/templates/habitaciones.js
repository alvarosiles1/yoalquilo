import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SLoad, SView } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';


class template extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}


	getHabitaciones(descripcion, precio) {

		return <>
			<SView col={'xs-11 md-8 lg-6 xl-4'} row center border={'#BBA4A4'} style={{ borderRadius: 8, }}  >
				<SView col={'xs-10'} height={60} row center>
					<SView col={'xs-3 md-2 lg-2 xl-2'} row center>
						<SView style={{ width: 48, height: 48, borderRadius: 50, backgroundColor: "red", }} row center >
							<SIcon name={'IMenuHabitacion'} fill='white' width={25} />
						</SView>
					</SView>
					<SView col={'xs-9 md-10 lg-10 xl-10'} row center  >
						<SView col={'xs-12 '}   >
							< SText fontSize={18} font={"Roboto"} color={'#111111'} Bold > {descripcion}  </SText>
							< SText fontSize={14} font={"Roboto-Light"} color={'#666666'} > Precio {precio} Bs  </SText>
						</SView>
					</SView>
				</SView>
				<SView col={'xs-2'} row center>
					<SView width={100} height={30} row center onPress={() => { SNavigation.navigate('habitacion/registro', { pollo: this.key }) }}>
						<SIcon name={'Reload'} fill='red' width={18} />
					</SView>
				</SView>
			</SView>
			<SView col={'xs-12'} height={10} />
		</>
	}

	render() {
		return (<>
			<SPage title={'Mis Habitaciones'}>

				<SView col={'xs-12'} height={40} />
				<SView col={"xs-12 "} center>
					{this.getHabitaciones('Nro 1', '500')}
					{this.getHabitaciones('Nro 2', '700')}
					{this.getHabitaciones('Nro 3', '700')}
					{this.getHabitaciones('Nro 4', '800')}
					{this.getHabitaciones('Nro 5', '800')}
					{this.getHabitaciones('Nro 6', '900')}
					{this.getHabitaciones('Nro 7', '1000')}

				</SView>

			</SPage>

			<FloatButtom onPress={() => {
				SNavigation.navigate("habitacion/registro")
			}} />	</>
		);
	}

}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(template);