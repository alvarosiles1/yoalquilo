import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SIcon, SInput, SPage, SPopup, SText, STheme, SView } from 'servisofts-component';
import YoAlquilo from '../../../Components/YoAlquilo';



class template extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		// this.key_inmueble = SNavigation.getParam("key_inmueble");
		// this.key = SNavigation.getParam("key");
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

		// this.data = {};
		// if (this.key) {
		// 	this.data = servicios.Actions.getByKey(this.key, this.props);
		// 	if (!this.data) return <SLoad />
		// }

		return <>

			<SText font={"Roboto"} col={'xs-11 sm-9 md-8 lg-6 xl-4'} fontSize={16} color={'#212121'} >Registrar datos</SText>

			<SForm ref={(ref) => { this.form = ref; }}
				row
				center
				col={"xs-11 sm-9 md-8 lg-6 xl-4"}
				inputProps={{
					customStyle: "yoalquilo",
					color: 'red',
					// color: '#707070',

					backgroundColor: 'cyan',
					justifyContent: "space-between"
				}}

				// <SView col={'xs-6'} height backgroundColor={'trasparent'} row center >
				// 			<SView width={150} height={150} border={'#606060'} row style={{ borderRadius: 8 }} >
				// 				<SView col={'xs-12'} height={8} />
				// 				<SView col={'xs-12'} center backgroundColor={'trasparent'} >
				// 					<SText font={"Roboto"} col={'xs-9'} center fontSize={13} bold style={{ textTransform: "capitalize" }} >agregar foto reverso</SText>
				// 				</SView>
				// 				<SView col={'xs-12'} center backgroundColor={'trasparent'}   >
				// 					<SIcon name='IconClienteCi2' width={50} height={40} fill={STheme.color.primary} />
				// 				</SView>
				// 				<SView col={'xs-12'} row backgroundColor={'trasparent'}  >
				// 					<SView col={'xs-8'} />
				// 					<SView col={'xs-4'} >
				// 						<SIcon name='IconClienteFotoPlus' width={20} height={25} fill={STheme.color.primary} stroke={STheme.color.primary} />
				// 					</SView>
				// 				</SView>
				// 				<SView col={'xs-12'} height={8} />
				// 			</SView>
				// 		</SView>



				inputs={{
					foto_p: {
						type: "image", isRequired: false, col: "xs-6 ", style: {
							borderRadius: 8, overflow: 'hidden', width: 150, height: 150, borderWidth: 0,
							// defaultValue?  `${SSocket.api.root}page/${this.key}`  : `${SSocket.api.root}page/${this.key}`
						}
						// defaultValue: `${SSocket.api.root}page/${this.key}`
					},

					// precio: { label: 'Precio', type: 'money', isRequired: true, defaultValue: this.data.precio, style: { width: "48%", marginStart: "25%", marginEnd: "25%" } },
					foto_p2: { type: "image", isRequired: false, col: "xs-6", style: { borderRadius: 8, overflow: 'hidden', width: 150, height: 150, borderWidth: 0 } },


					ci: {
						label: 'Nro carnet identidad', type: 'text', isRequired: true, style: { fontSize: 14 },
						icon: <SIcon name={"IconClienteCiNro"} width={35} height={18} fill={STheme.color.primary} />,
						onKeyPress: (evt) => { if (evt.key === "Enter") { this.form.focus("nombres"); } }

					},
					nombres: {
						label: 'Nombre completo', type: 'text', isRequired: true, style: { fontSize: 14 },
						icon: <SIcon name={"IconClienteUser"} width={40} height={20} fill={STheme.color.primary} />,
						onKeyPress: (evt) => { if (evt.key === "Enter") { this.form.focus("apellidos"); } }

					},
					apellidos: {
						label: 'Apellidos', type: 'text', isRequired: true, style: { fontSize: 14 },
						icon: <SIcon name={"IconClienteUser"} width={35} height={18} fill={STheme.color.primary} />,
						iconR: <SIcon name={"IconClientePais"} width={35} height={18} fill={STheme.color.primary} />,
						onKeyPress: (evt) => { if (evt.key === "Enter") { this.form.focus("pais"); } }
					},
					pais: {
						label: 'Pais', type: 'select', isRequired: true, defaultValue: 'bolivia',
						style: { col: 'xs-12', row: 'xs-12', },

						options: [
							{ key: "bolivia", content: <SText >Bolivia</SText> },
							{ key: "brasil", content: "Brasil" },
							{ key: "venezuela", content: "Venezuela" },
							{ key: "colombia", content: "Colombia" },
						],

					},
					telefono: {
						label: 'ingresar telefono', type: 'phone', isRequired: true, style: { fontSize: 14 },
						icon: <SIcon name={"IconClienteTelefono"} width={35} height={18} fill={STheme.color.primary} />,
						onKeyPress: (evt) => { if (evt.key === "Enter") { this.form.submit(); } }
					},
				}}
				// onSubmitName={"GUARDAR"}
				onSubmit={(values) => {
					if (this.key) {
						SPopup.alert("campos actualizados!");

						// servicios.Actions.editar({ ...this.data, ...values }, this.props);
					} else {
						SPopup.alert("Medotdo guardar!");

						// values.key_inmueble = this.key_inmueble;
						// values.tipo = 1;
						// values.estado_servicio = 1;
						// servicios.Actions.registro(values, this.props);
					}
				}}
			/>
			<SView col={'xs-12'} height={24} />

			<SView col={"xs-11 sm-9 md-8 lg-6 xl-4"} row center  >

				<YoAlquilo.YoAlquiloButtom primary onPress={() => {
					this.form.submit();
				}}>INICIAR</YoAlquilo.YoAlquiloButtom>


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



				<SView col={'xs-6'} height row center onPress={() => { SPopup.alert("¡Código incorrecto!"); }}>
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
		return <>
			<SView col={'xs-11 sm-9 md-8 lg-6 xl-4'} height={75} row center border={'#BBA4A4'} style={{ borderRadius: 8, overflow: 'hidden' }}  >
				<SView col={'xs-1.5 md-1.2'} height style={{ top: 12, }} backgroundColor={'transparent'} >
					<SIcon name={'IconClienteSubordinado'} width={24} height={22.02} fill='red' />
				</SView>
				<SView col={'xs-6.5 md-6.5'} height backgroundColor={'transparent'} style={{ top: 12, }} >
					< SText fontSize={18} font={"Roboto"} color={'#111111'} Bold >Tia</SText>
					< SText fontSize={14} font={"Roboto-Light"} color={'#666666'} >Sandra Torrico Torrico</SText>
					< SText fontSize={14} font={"Roboto-Light"} color={'#666666'} >telf: 69090090</SText>
				</SView>
				<SView col={'xs-2.5 md-3'} height style={{ top: 12, alignItems: "flex-end" }}>
					<SIcon name={'IconEdit'} width={18} height={22.02} fill='none' />
				</SView>
			</SView>
			<SView col={'xs-12'} height={10} />
			<SView col={'xs-11 sm-9 md-8 lg-6 xl-4'} height={75} row center border={'#BBA4A4'} style={{ borderRadius: 8, overflow: 'hidden' }}  >
				<SView col={'xs-1.5 md-1.2'} height style={{ top: 12, }} backgroundColor={'transparent'} >
					<SIcon name={'IconClienteSubordinado'} width={24} height={22.02} fill='red' />
				</SView>
				<SView col={'xs-6.5 md-6.5'} height backgroundColor={'transparent'} style={{ top: 12, }} >
					< SText fontSize={18} font={"Roboto"} color={'#111111'} Bold >Tia</SText>
					< SText fontSize={14} font={"Roboto-Light"} color={'#666666'} >Sandra Torrico Torrico</SText>
					< SText fontSize={14} font={"Roboto-Light"} color={'#666666'} >telf: 69090090</SText>
				</SView>
				<SView col={'xs-2.5 md-3'} height style={{ top: 12, alignItems: "flex-end" }}>
					<SIcon name={'IconEdit'} width={18} height={22.02} fill='none' />
				</SView>
			</SView>
			<SView col={'xs-12'} height={10} />
		</>
	}

	render() {
		// var reducer = servicios.Actions._getReducer(this.props);
		// if (reducer.estado == "exito" && (reducer.type == "registro" || reducer.type == "editar")) {
		// 	reducer.estado = "";
		// 	SNavigation.goBack();
		// }
		return (
			<SPage title={'Registro Inquilino'} center>
				<SView height={24} />
				{this.getheaderPhoto()}
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
export default connect(initStates)(template);