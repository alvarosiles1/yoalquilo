import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SIcon, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';



class template extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	getForm() {
		return <SForm
			ref={(ref) => { this.form = ref; }}
			props={{
				col: "xs-12",
			}}
			inputProps={{
				customStyle: "kolping",
				separation: 16,
			}}
			inputs={{


				inquilinoCi: {
					placeholder: "Ingresar Carnet Identidad",
					isRequired: true, keyboardType: "email-address", autoCapitalize: "none", type: "text", autoFocus: true, onKeyPress: (evt) => {
						if (evt.key === "Enter") {
							this.form.focus("password");
						}
					},
				},

				nombres: {
					placeholder: "Ingresar Nombres",
					isRequired: true, keyboardType: "email-address", autoCapitalize: "none", type: "text", autoFocus: true, onKeyPress: (evt) => {
						if (evt.key === "Enter") {
							this.form.focus("password");
						}
					},
				},
				apellidos: {
					placeholder: "Ingresar Apellidos",
					isRequired: true, keyboardType: "email-address", autoCapitalize: "none", type: "text", autoFocus: true, onKeyPress: (evt) => {
						if (evt.key === "Enter") {
							this.form.focus("password");
						}
					},
				},
				Nacionalidad: {
					placeholder: "Seleccionar Nacionalidad",
					isRequired: true, keyboardType: "email-address", autoCapitalize: "none", type: "text", autoFocus: true, onKeyPress: (evt) => {
						if (evt.key === "Enter") {
							this.form.focus("password");
						}
					},
				},
				telefono: {
					placeholder: "Ingresar Telefono",
					isRequired: true, keyboardType: "email-address", autoCapitalize: "none", type: "text", autoFocus: true, onKeyPress: (evt) => {
						if (evt.key === "Enter") {
							this.form.focus("password");
						}
					},
				},



			}}
			onSubmit={(data) => {
				if (data) {
					// Parent.Actions.getAll(data, this.props);
					// Parent.Actions.login(data, this.props);
				}
			}}
		/>
	}
	render() {
		return (
			<SPage title={'Lista'}>


				<SView col={'xs-11 md-10 lg-4 xl-4'} height row center>

					<SView height={50} />


					<SView col={'xs-12'} row center border={'cyan'}  >
						<SView col={'xs-6  '} width={150} height={150} row center onPress={() => { SNavigation.navigate('') }} border={'blue'} >

							<SView style={{ width: 120, height: 120, borderRadius: 8, borderWidth: 1.5 }} center border={'#606060' + 50}  >
								<SText center fontSize={14} font={"Roboto-Light"} color={'#212121'}>Agregar foto Frontal' </SText>
								<SView height={8} />
								<SIcon name={'Back'} width={50} height={40} fill={STheme.color.primary} border={'cyan'} />
							</SView>
						</SView>

						<SView col={'xs-6  '} width={150} height={150} row center onPress={() => { SNavigation.navigate('') }}>

							<SView style={{ width: 120, height: 120, borderRadius: 8, borderWidth: 1.5, }} center border={'#606060' + 50}  >
								<SText center fontSize={14} font={"Roboto-Light"} color={'#212121'}>Agregar foto Reverso </SText>
								<SView height={8} />
								<SIcon name={'Back'} width={50} height={40} fill={STheme.color.primary} border={'cyan'} />
							</SView>
						</SView>
					</SView>

					<SView col={'xs-11 xl-6'} border={'blue'} row center>
						{this.getForm()}
					</SView>
				</SView>


			</SPage>
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(template);