import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SButtom, SIcon, SPage, SText, STheme, SView, SNavigation } from 'servisofts-component'
import Usuario from '../../Services/Usuario'
import PerfilUsuario from './PerfilUsuario'
import { connect } from 'react-redux';

class AjustesPage extends Component {
    static navigationOptions = {
        headerShown: false,
    }
    constructor(props) {
        super(props)
        this.state = {
            text: 'Ajustes'
        }
    }

    getOptions({ title, icon }, isLine) {
        return <SView col={"xs-12"} style={{
            height: 50,
            backgroundColor: STheme.color.card,
            // borderRadius: 4,
        }} center row onPress={() => {

        }}>
            <SView style={{
                width: 60,
            }} center>
                <SIcon name={icon} style={{
                    width: 35,
                    height: 35,
                }} />
            </SView>
            <SView flex style={{
                height: "100%",
                justifyContent: "center",
                borderBottomWidth: (!isLine ? 1 : 0),
                borderBottomColor: "#66666644",
                paddingStart: 4,
            }}>
                <SText style={{ fontSize: 14 }}>{title}</SText>
            </SView>
        </SView>
    }

    logout() {
        return <SButtom props={{ type: "danger" }} onPress={() => {

            this.props.dispatch({ type: "USUARIO_LOGOUT" });
            SNavigation.replace("carga");
            // this.fadeOut();

        }}>Logout</SButtom>
    }

    render() {
        // if (!usuario.Actions.validateSession(this.props, true)) {
        //     SNavigation.replace("login");
        // } else {
        //     SNavigation.replace('/');
        // }



        return (
            <SPage
                title={"Ajustes"}
            >
                <SView col={"xs-12"} center flex>
                    <SView col={"xs-11 sm-9 md-7 lg-5 xl-4"} style={{
                        // backgroundColor: "#66000022",
                        borderRadius: 6,
                        height: "100%",
                        alignItems: "center"
                    }}>
                        <SView col={"xs-12"} style={{ height: 24 }} />
                        <SView style={{
                            width: "100%",
                            borderRadius: 8,
                            overflow: "hidden",
                        }}>
                            <PerfilUsuario navigation={this.props.navigation} />
                        </SView>
                        <SView col={"xs-12"} style={{ height: 24 }} />

                        {/* {this.getOptions({ title: "Carrito", icon: "Carrito" })} */}
                        {/* {this.getOptions({ title: "Ajustes", icon: "Ajustes" })} */}
                        {/* {this.getOptions({ title: "Caja", icon: "Caja" }, true)} */}


                        {/* <SText>Cerrar sesion</SText> */}
                        {this.logout()}
                    </SView>
                </SView>
            </SPage>
        )
    }
}

const initStates = (state) => {
    return { state }
};
export default connect(initStates)(AjustesPage);
