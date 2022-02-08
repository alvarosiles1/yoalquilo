import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SIcon, SInput, SNavigation, SPage, SPopup, SText, STheme, SView } from 'servisofts-component';
import YoAlquilo from '../../../../../Components/YoAlquilo';
import cliente_subordinado from '..';

class Registro extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};

		this.key_cliente = SNavigation.getParam("key_cliente");
		this.key = SNavigation.getParam("key");
	}



	getForm() {

		this.data = {};
		if (this.key) {
			this.data = cliente_subordinado.Actions.getByKey(this.key, this.props);
			if (!this.data) return <SLoad />
		}

		return <>


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

					descripcion: {
						label: 'subordinado', type: 'select', isRequired: true,
						style: { col: 'xs-12', row: 'xs-12', },
						defaultValue: this.data?.descripcion ?? 'Padre',
						options: [
							{ key: "Padre", content: "Padre" },
							{ key: "Madre", content: "Madre" },
							{ key: "Hermano/a", content: "Hermano/a" },
							{ key: "Tio/a", content: "Tio/a" },
							{ key: "Primo/a", content: "Primo/a" },
							{ key: "Tutor/a", content: "Tutor/a" },
							{ key: "Pareja", content: "Pareja" },
						],
					},
					nombre: {
						label: 'Nombre completo', type: 'text', isRequired: true, style: { fontSize: 14 },
						defaultValue: this.data?.nombre,
						icon: <SIcon name={"IconClienteUser"} width={40} height={20} fill={STheme.color.primary} />,

					},
					telefono: {
						label: 'ingresar telefono', type: 'phone', isRequired: true, style: { fontSize: 14 },
						defaultValue: this.data?.telefono,
						icon: <SIcon name={"IconClienteTelefono"} width={35} height={18} fill={STheme.color.primary} />,

					},
				}}
				onSubmit={(values) => {
					if (this.key) {
						cliente_subordinado.Actions.editar({ ...this.data, ...values }, this.props);
					} else {
						values.key_cliente = this.key_cliente;
						cliente_subordinado.Actions.registro(values, this.props);
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


	render() {
		var reducer = cliente_subordinado.Actions._getReducer(this.props);
		if (reducer.estado == "exito" && (reducer.type == "registro" || reducer.type == "editar")) {
			reducer.estado = "";
			SNavigation.goBack();
		}
		return (
			<SPage title={'Registro subordinado'} center>
				<SView height={24} />
				{this.getForm()}
				<SView height={24} />
			</SPage >
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Registro);