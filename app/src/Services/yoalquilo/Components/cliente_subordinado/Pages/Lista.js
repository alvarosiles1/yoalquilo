import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SLoad, SView } from 'servisofts-component';
import cliente_subordinado from '..';
import FloatButtom from '../../../../../Components/FloatButtom';

class Lista extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};

		this.key_cliente = SNavigation.getParam("key_cliente");

	}
	getListInquilino = () => {
		var lista = cliente_subordinado.Actions.getAll(this.props);
		if (!lista) return <SText>Cargando</SText>

		let listaDeTiposFiltrados = Object.values(lista).filter(item => {
			if (item.key_cliente != this.key_cliente) {
				return false;
			}
			return true;
		});
		if (Object.keys(listaDeTiposFiltrados).length == 0) {
			SNavigation.replace("cliente_subordinado/registro", { key_cliente: this.key_cliente });
			return <SText>No hay subordinado</SText>
		}

		return listaDeTiposFiltrados.map(item => {
			var key = item.key;
			var obj = lista[key];
			return <>
				<SView col={'xs-11 md-8 lg-6 xl-4'} row center border={'#BBA4A4'} style={{ borderRadius: 8, }}  >
					<SView col={'xs-10'} height={60} row center>
						<SView col={'xs-3 md-2 lg-2 xl-2'} row center>
							<SView style={{ width: 48, height: 48, borderRadius: 50, backgroundColor: "blue", }} row center >

								<SIcon name={'IconClienteSubordinado'} width={24} height={22.02} fill='red' />

							</SView>
						</SView>
						<SView col={'xs-9 md-10 lg-10 xl-10'} row center  >
							<SView col={'xs-12 '}   >
								< SText fontSize={18} font={"Roboto"} color={'#111111'} Bold > {obj.nombre}</SText>
								< SText fontSize={14} font={"Roboto-Light"} color={'#666666'} > telefono {lista[key].telefono}  </SText>

							</SView>
						</SView>
					</SView>
					<SView col={'xs-2'} row center>
						<SView width={100} height={30} row center onPress={() => {
							SNavigation.navigate('cliente_subordinado/registro', { key_cliente: this.key_cliente, key: obj.key })

						}}>
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
			<SPage title={'Lista subordinado'}>
				<SView col={'xs-12'} height={40} />
				<SView col={"xs-12 "} center>

					{this.getListInquilino()}



				</SView>
			</SPage>
			<FloatButtom onPress={() => {
				SNavigation.navigate(
					SNavigation.navigate("cliente_subordinado/registro", { key_cliente: this.key_cliente }))
			}} />	</>
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Lista);