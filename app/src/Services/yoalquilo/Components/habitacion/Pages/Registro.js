import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SLoad, SNavigation, SPage, SText } from 'servisofts-component';

import servicios from '../../servicios';
class Registro extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.key_inmueble = SNavigation.getParam("key_inmueble");

	}
	getForm() {

		// this.data = {};
		// if (this.key_inmueble) {
		// 	this.data = servicios.Actions.getByKey(this.key_inmueble, this.props);
		// 	if (!this.data) return <SLoad />
		// }


		return <SForm
			col={"xs-11 sm-10 md-8 lg-6 xl-4"}
			inputProps={{
				customStyle: "yoalquilo"
			}}
			inputs={{

				Inmueble: { label: 'obtengo key inmueble', type: 'text', isRequired: true, defaultValue: this.data?.key_inmueble },
				descripcion: { label: 'Descripcion', type: 'text', isRequired: true, defaultValue: this.data?.descripcion },
				precio: { label: 'Precio', type: 'text', isRequired: true, defaultValue: this.data?.precio },

				estado_servicio: {
					label: 'Estado', type: 'select', defaultValue: '' + this.data.estado_servicio + '', isRequired: true, options: [
						{ key: "", content: " " },
						{ key: "1", content: "Diponible" },
						{ key: "0", content: "ocupado" },
						{ key: "2", content: "Reparación" },

					]
				},
			}}
			onSubmitName={"registrar"}
			onSubmit={(values) => {

				if (this.key_inmueble) {
					servicios.Actions.editar({ ...this.data, ...values }, this.props);
				} else {
					values.key_inmueble = this.key_inmueble;
					values.tipo = 1;
					values.estado_servicio = 1;
					servicios.Actions.registro(values, this.props);
				}
			}}
		/>
	}

	render() {
		var reducer = servicios.Actions._getReducer(this.props);
		if (reducer.estado == "exito" && (reducer.type == "registro" || reducer.type == "editar")) {
			reducer.estado = "";
			SNavigation.goBack();
		}
		return (
			<SPage title={'Registro'} center>
				{this.getForm()}
			</SPage>
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Registro);