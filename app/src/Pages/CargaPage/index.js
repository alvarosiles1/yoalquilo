import React, { Component } from 'react';
import { SPage, SText, SThread, SView, SNavigation, STheme, SIcon, SImage } from 'servisofts-component';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import LogoAnimado from './LogoAnimado';
import Splash from '../../Components/BackgroundImage/splash'
import usuario from '../../Services/Usuario/Components/usuario';

class CargaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 2500,
        };
    }

    redirect() {
        if (!usuario.Actions.validateSession(this.props, true)) {
            SNavigation.replace("login");
        } else {
            SNavigation.replace("/");
        }
    }
    hilo() {
        new SThread(this.state.delay, "cargaHilo", true).start(() => {
            this.redirect();
        });
    }
    render() {
        this.hilo()
        return (

            <SPage
                hidden
                title="CargaPage"
                disableScroll
            >
                {/* <Splash /> */}
                <SView col={"xs-12"} center height>
                    <SView height={100} col={"xs-12"}>

                    </SView>
                    <SView
                        col={"xs-11 sm-10 md-9 lg-8 xl-6"} center flex >
                        {/* <LogoAnimado /> */}
                        <SImage src={require("./img.png")} width={"100%"} sty />
                    </SView>
                    <SView height={100} col={"xs-12"} center>
                        <SText font={"Roboto"}>Cargando...</SText>
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(CargaPage);