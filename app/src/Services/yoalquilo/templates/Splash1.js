import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SIcon, SInput, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';

class Splash1 extends Component {
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
				customStyle: "yoalquilo",
				separation: 16,
				backgroundColor: 'cyan',
				borderColor: 'blue'
			}}
			inputs={{
				tipoInmueble: {
					placeholder: "Seleccionar tipo",
					isRequired: true, keyboardType: "email-address", autoCapitalize: "none", type: "text", autoFocus: true, onKeyPress: (evt) => {
						if (evt.key === "Enter") {
							this.form.focus("password");
						}
					},
					icon: <SIcon name={"InputEmail"} width={40} height={30} />
				},
				nombre: {
					placeholder: "Ingresar Nombre",
					type: "password", isRequired: true, onKeyPress: (evt) => {
						if (evt.key === "Enter") {
							this.form.submit();
						}
					},
					icon: <SIcon name={"InputPassword"} width={40} height={30} />
				},

				ubicacion: {
					placeholder: "Ingresar ubicación",
					type: "password", isRequired: true, onKeyPress: (evt) => {
						if (evt.key === "Enter") {
							this.form.submit();
						}
					},
					icon: <SIcon name={"InputPassword"} width={40} height={30} />
				},
			}}
			onSubmit={(data) => {
				if (data) {
					Parent.Actions.login(data, this.props);
				}
			}}
		/>
	}


	render() {
		return (
			<SPage title={'Paso 1'}>
				<SView center col={"xs-12"}>
					<SView col={"xs-11 md-6 lg-4 xl-4"} center>
						<SHr height={40} />
						<SText color={'#1F2937'} fontSize={24} center >{'Registraremos nuestro Inmueble'}</SText>
						<SHr height={18} />
						<SView col={"xs-12"} height={200}  >
							{this.getForm()}
						</SView>
						<SView col={"xs-12"} height={32} />
						<SView col={"xs-12"} height={190} >
							<SIcon name={"Splash001"} />
						</SView>
						<SView col={"xs-12"} height={32} />
						<SView col={"xs-9"} center height={50}  >
							<SText color={STheme.color.lightGray + 100} fontSize={12} center>{'No tienes que ir muy lejos para encontrar un buen restaurante, hemos proporcionado todos.'}</SText>
						</SView>
						<SView col={"xs-12"} height={32} />
						<SView col={"xs-12"} height={40} row center   >
							<SView col={"xs-2"} height center   >
								<SText fontSize={16} color={STheme.color.lightGray + 100} font={"Roboto"}>Saltar</SText>
							</SView>
							<SView col={"xs-8"} height center row>
								<SText fontSize={14} color={STheme.color.primary} font={"Roboto"}> o</SText>
								<SText fontSize={14} color={STheme.color.lightGray + 100} font={"Roboto"}> o o </SText>
							</SView>
							<SView col={"xs-2"} height center style={{ transform: [{ rotate: "180deg" }] }} onPress={() => {
								SNavigation.navigate("splash2")
							}}>
								<SIcon name={"Arrow"} width={24} fill={STheme.color.primary} />
							</SView>
						</SView>
					</SView>
				</SView>
			</SPage>
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Splash1);