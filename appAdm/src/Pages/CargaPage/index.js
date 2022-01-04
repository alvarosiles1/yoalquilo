import React, { Component } from 'react';
import { SPage, SText, SThread, SView, SNavigation, STheme, SIcon } from 'servisofts-component';
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
            >
                {/* <Splash /> */}
                <SView center flex>
                    <SView
                        col={"xs-11 sm-10 md-9 lg-8 xl-6"} center>
                        {/* <LogoAnimado /> */}
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