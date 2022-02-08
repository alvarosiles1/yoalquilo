import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SIcon, SInput, SNavigation, SPage, SPopup, SText, STheme, SView } from 'servisofts-component';
import cliente from '..';
import YoAlquilo from '../../../../../Components/YoAlquilo';
import cliente_subordinado from '../../cliente_subordinado';

class Registro extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.key_inmueble = SNavigation.getParam("key_inmueble");
		this.key = SNavigation.getParam("key");
	}

	getheaderPhoto() {
		return <SView col={'xs-11 sm-9 md-8 lg-6 xl-4'} height={150} row center>
			<SView col={'xs-6'} height backgroundColor={'trasparent'} row center >
				<SView width={150} height={150} border={'#606060'} row style={{ borderRadius: 8 }} >
					<SView col={'xs-12'} height={8} />
					<SView col={'xs-12'} center backgroundColor={'trasparent'} >
						<SText font={"Roboto"} col={'xs-9'} center fontSize={13} bold style={{ textTransform: "capitalize" }} >agregar foto Frontal</SText>
					</SView>
					<SView col={'xs-12'} center backgroundColor={'trasparent'}   >
						<SIcon name='IconClienteCi1' width={50} height={40} fill={STheme.color.primary} />
					</SView>
					<SView col={'xs-12'} row backgroundColor={'trasparent'}  >
						<SView col={'xs-8'} />
						<SView col={'xs-4'} >
							<SIcon name='IconClienteFotoPlus' width={20} height={25} fill={STheme.color.primary} stroke={STheme.color.primary} />
						</SView>
					</SView>
					<SView col={'xs-12'} height={8} />
				</SView>
			</SView>
			<SView col={'xs-6'} height backgroundColor={'trasparent'} row center >
				<SView width={150} height={150} border={'#606060'} row style={{ borderRadius: 8 }} >
					<SView col={'xs-12'} height={8} />
					<SView col={'xs-12'} center backgroundColor={'trasparent'} >
						<SText font={"Roboto"} col={'xs-9'} center fontSize={13} bold style={{ textTransform: "capitalize" }} >agregar foto reverso</SText>
					</SView>
					<SView col={'xs-12'} center backgroundColor={'trasparent'}   >
						<SIcon name='IconClienteCi2' width={50} height={40} fill={STheme.color.primary} />
					</SView>
					<SView col={'xs-12'} row backgroundColor={'trasparent'}  >
						<SView col={'xs-8'} />
						<SView col={'xs-4'} >
							<SIcon name='IconClienteFotoPlus' width={20} height={25} fill={STheme.color.primary} stroke={STheme.color.primary} />
						</SView>
					</SView>
					<SView col={'xs-12'} height={8} />
				</SView>
			</SView>
		</SView >
	}

	getForm() {

		this.data = {};
		if (this.key) {
			this.data = cliente.Actions.getByKey(this.key, this.props);
			if (!this.data) return <SLoad />
		}



		return <>

			<SText font={"Roboto"} col={'xs-11 sm-9 md-8 lg-6 xl-4'} fontSize={16} color={'#212121'} >Registrar datos</SText>

			<SForm ref={(ref) => { this.form = ref; }}
				row
				center
				col={"xs-11 sm-9 md-8 lg-6 xl-4"}
				inputProps={{
					customStyle: "yoalquilo",
					color: 'red',
					backgroundColor: 'cyan',
					justifyContent: "space-between"
				}}

				inputs={{
					foto_p: { type: "image", isRequired: false, col: "xs-6 ", style: { borderRadius: 8, overflow: 'hidden', width: 150, height: 150, borderWidth: 0, } },

					foto_p2: { type: "image", isRequired: false, col: "xs-6", style: { borderRadius: 8, overflow: 'hidden', width: 150, height: 150, borderWidth: 0 } },

					ci: {
						label: 'Nro carnet identidad', type: 'text', isRequired: true, style: { fontSize: 14 },
						defaultValue: this.data?.ci,
						icon: <SIcon name={"IconClienteCiNro"} width={35} height={18} fill={STheme.color.primary} />,
						// onKeyPress: (evt) => { if (evt.key === "Enter") { this.form.focus("nombres"); } }
					},
					nombres: {
						label: 'Nombre completo', type: 'text', isRequired: true, style: { fontSize: 14 },
						defaultValue: this.data?.nombres,
						icon: <SIcon name={"IconClienteUser"} width={40} height={20} fill={STheme.color.primary} />,
						// onKeyPress: (evt) => { if (evt.key === "Enter") { this.form.focus("apellidos"); } }
					},
					apellidos: {
						label: 'Apellidos', type: 'text', isRequired: true, style: { fontSize: 14 },
						defaultValue: this.data?.apellidos,

						icon: <SIcon name={"IconClienteUser"} width={35} height={18} fill={STheme.color.primary} />,
						iconR: <SIcon name={"IconClientePais"} width={35} height={18} fill={STheme.color.primary} />,
						// onKeyPress: (evt) => { if (evt.key === "Enter") { this.form.focus("pais"); } }
					},
					pais: {
						label: 'Pais', type: 'select', isRequired: true,
						style: { col: 'xs-12', row: 'xs-12', },
						defaultValue: this.data?.pais ?? 'bolivia',
						options: [
							{ key: "bolivia", content: <SText>Bolivia</SText> },
							{ key: "brasil", content: "Brasil" },
							{ key: "venezuela", content: "Venezuela" },
							{ key: "colombia", content: "Colombia" },
						],
					},
					telefono: {
						label: 'ingresar telefono', type: 'phone', isRequired: true, style: { fontSize: 14 },
						defaultValue: this.data?.telefono,
						icon: <SIcon name={"IconClienteTelefono"} width={35} height={18} fill={STheme.color.primary} />,
						// onKeyPress: (evt) => { if (evt.key === "Enter") { this.form.submit(); } }
					},
				}}
				onSubmit={(values) => {
					if (this.key) {
						cliente.Actions.editar({ ...this.data, ...values }, this.props);
						SPopup.alert("campos actualizados!");

					} else {
						values.key_inmueble = this.key_inmueble;
						cliente.Actions.registro(values, this.props);
						SPopup.alert("Medotdo guardar!");

					}
				}}
			/>
			<SView col={'xs-12'} height={24} />

			<SView col={"xs-11 sm-9 md-8 lg-6 xl-4"} row center  >

				<YoAlquilo.YoAlquiloButtom primary onPress={() => {
					this.form.submit();
				}}>GUARDAR</YoAlquilo.YoAlquiloButtom>


			</SView>




		</>
	}

	getSubordinadoHeader = () => {
		return <>
			<SView col={'xs-11 sm-9 md-8 lg-6 xl-4'} height={25} row center style={{ overflow: 'hidden' }}

			>
				<SView col={'xs-6'} height backgroundColor={'transparent'} row center >
					<SText font={"Roboto"} col={'xs-12'} fontSize={16} color={'#212121'}>Subordinados</SText>
				</SView>



				<SView col={'xs-6'} height row center onPress={() => {

					if (!this.key) {
						SPopup.alert("registrar usuario!");

					} else {
						SNavigation.navigate('cliente_subordinado/registro', { key_cliente: this.key })

					}



					// SNavigation.navigate('cliente_subordinado', { key_cliente: this.key })



				}}>
					<SView col={'xs-12'}>
						<SView style={{ alignItems: "flex-end" }}>
							<SText font={"Roboto"} fontSize={18} color={STheme.color.primary}><SIcon name={'IconClientePlus'} width={12} stroke={STheme.color.primary} /> Añadir</SText>
						</SView>
					</SView>
				</SView>
			</SView>
			<SView col={'xs-11 sm-9 md-8 lg-6 xl-4'} backgroundColor={STheme.color.lightGray} height={1.3}></SView>

		</>
	}

	getSubordinadoList = () => {


		var lista100 = cliente_subordinado.Actions.getAll(this.props);
		if (!lista100) return <SText>Cargando</SText>

		let listaDeTiposFiltrados = Object.values(lista100).filter(item => {
			if (item.key_cliente != this.key) {
				return false;
			}
			return true;
		});

		if (!this.key) {
			return false
		}

		if (Object.keys(listaDeTiposFiltrados).length == 0) {
			// SNavigation.replace("cliente_subordinado/registro", { key_cliente: this.key_cliente });
			return <SText>No hay subordinado</SText>
		}

		return listaDeTiposFiltrados.map(item => {
			var key = item.key;
			var obj = lista100[key];
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
								< SText fontSize={14} font={"Roboto-Light"} color={'#666666'} > telefono {lista100[key].telefono}  </SText>

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


	// getSubordinadoList = () => {
	// 	return <>
	// 		<SView col={'xs-11 sm-9 md-8 lg-6 xl-4'} height={75} row center border={'#BBA4A4'} style={{ borderRadius: 8, overflow: 'hidden' }}  >
	// 			<SView col={'xs-1.5 md-1.2'} height style={{ top: 12, }} backgroundColor={'transparent'} >
	// 				<SIcon name={'IconClienteSubordinado'} width={24} height={22.02} fill='red' />
	// 			</SView>
	// 			<SView col={'xs-6.5 md-6.5'} height backgroundColor={'transparent'} style={{ top: 12, }} >
	// 				< SText fontSize={18} font={"Roboto"} color={'#111111'} Bold >Tia</SText>
	// 				< SText fontSize={14} font={"Roboto-Light"} color={'#666666'} >Sandra Torrico Torrico</SText>
	// 				< SText fontSize={14} font={"Roboto-Light"} color={'#666666'} >telf: 69090090</SText>
	// 			</SView>
	// 			<SView col={'xs-2.5 md-3'} height style={{ top: 12, alignItems: "flex-end" }}>
	// 				<SIcon name={'IconEdit'} width={18} height={22.02} fill='none' />
	// 			</SView>
	// 		</SView>
	// 		<SView col={'xs-12'} height={10} />
	// 		<SView col={'xs-11 sm-9 md-8 lg-6 xl-4'} height={75} row center border={'#BBA4A4'} style={{ borderRadius: 8, overflow: 'hidden' }}  >
	// 			<SView col={'xs-1.5 md-1.2'} height style={{ top: 12, }} backgroundColor={'transparent'} >
	// 				<SIcon name={'IconClienteSubordinado'} width={24} height={22.02} fill='red' />
	// 			</SView>
	// 			<SView col={'xs-6.5 md-6.5'} height backgroundColor={'transparent'} style={{ top: 12, }} >
	// 				< SText fontSize={18} font={"Roboto"} color={'#111111'} Bold >Tia</SText>
	// 				< SText fontSize={14} font={"Roboto-Light"} color={'#666666'} >Sandra Torrico Torrico</SText>
	// 				< SText fontSize={14} font={"Roboto-Light"} color={'#666666'} >telf: 69090090</SText>
	// 			</SView>
	// 			<SView col={'xs-2.5 md-3'} height style={{ top: 12, alignItems: "flex-end" }}>
	// 				<SIcon name={'IconEdit'} width={18} height={22.02} fill='none' />
	// 			</SView>
	// 		</SView>
	// 		<SView col={'xs-12'} height={10} />
	// 	</>
	// }


	render() {
		var reducer = cliente.Actions._getReducer(this.props);
		if (reducer.estado == "exito" && (reducer.type == "registro" || reducer.type == "editar")) {
			reducer.estado = "";
			SNavigation.goBack();
		}
		return (
			<SPage title={'Registro Inquilino'} center>
				{/* <SView height={24} /> */}
				{/* {this.getheaderPhoto()} */}
				<SView height={24} />
				{this.getForm()}
				<SView height={24} />
				{this.getSubordinadoHeader()}
				<SView height={24} />
				{this.getSubordinadoList()}
				<SView height={24} />
			</SPage >
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Registro);