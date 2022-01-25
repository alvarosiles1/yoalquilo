import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SIcon, SInput, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';

class Splash3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}


	render() {
		return (
			<SPage title={'Paso 3'} disableScroll>
				<SView center col={"xs-12"} flex>
					<SView col={"xs-11 md-6 lg-4 xl-4"} center flex >
						<SHr height={40} />

						<SView col={"xs-12"} height={100} center    >
							<SText color={'#1F2937'} fontSize={24} center >{'Selecciones los servicios que brinda el inmueble'}</SText>
						</SView>

						<SHr height={18} />


						<SView center col={"xs-12"} flex  >


							<SView col={"xs-12"} center flex height  >
								<SView col={"xs-12"} height={190} >
									<SIcon name={"Splash003"} />
								</SView>
							</SView>

							<SView col={"xs-12"} height={32} />

							<SView col={"xs-12"} center height={120}  >
								<SText color={'#1F2937'} fontSize={20} center >{'Buena comida a un precio barato'}</SText>

								<SView col={"xs-12"} height={32} />

								<SText color={STheme.color.lightGray + 100} fontSize={12} center>{'No tienes que ir muy lejos para encontrar un buen restaurante, hemos proporcionado todos.'}</SText>
							</SView>

							<SView col={"xs-12"} height={32} />


							<SView col={"xs-12"} height={100} row center  >
								<SView col={"xs-2"} height center   >
									<SText fontSize={16} color={STheme.color.lightGray + 100} font={"Roboto"}>Saltar</SText>
								</SView>
								<SView col={"xs-8"} height center row>

									<SText fontSize={14} color={STheme.color.lightGray + 100} font={"Roboto"}>o o</SText>	<SText fontSize={14} color={STheme.color.primary} font={"Roboto"}> o</SText>
								</SView>
								<SView col={"xs-2"} height center style={{
									transform: [{
										rotate: "180deg",
									}]
								}} onPress={() => {
									SNavigation.navigate("/")
								}} >
									< SIcon name={"Arrow"} width={24} fill={STheme.color.primary} />
								</SView>
							</SView>
						</SView>

					</SView>
				</SView>
			</SPage >
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Splash3);