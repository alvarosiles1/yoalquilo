import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import inmueble from '..';
import FloatButtom from '../../../../../Components/FloatButtom';

class lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getIcon(tipo) {
        switch (tipo) {
            case "condominio":
                return "IconMenuCondominio";
            case "edificio":
                return "IconMenuEdificio";
            case "casa":
                return "IconMenuCasa";
            case "hotel":
                return "IconMenuHotel";
            case 'hostal':
                return "IconMenuHotel";
            case "motel":
                return "IconMenuMotel";
            default:
                return "YAHome";
        }
    }






    getAll() {
        var lista = inmueble.Actions.getAllActivas(this.props);
        if (!lista) return <SText>Cargando</SText>
        if (Object.keys(lista).length == 0) {
            SNavigation.navigate("inmueble/registro");
            return <SText>No hay inmuebles</SText>
        }

        return Object.keys(lista).map(key => {
            var obj = lista[key];
            return <>
                <SView col={'xs-6 md-4 lg-3 xl-2'} row center border={'transparent'}  >

                    <SView width={130} height={150} row center
                        onPress={() => { SNavigation.navigate('menu', { pipoca: key }) }}>
                        <SView style={{
                            width: 120, height: 120, borderRadius: 20, backgroundColor: "#F6F6F6",
                        }} center >

                            <SView width={'100%'} height={'100%'} style={{
                                position: "absolute",
                            }} center>
                                <SIcon name={this.getIcon(obj.tipo)} width={80} height={80} fill={STheme.color.primary} />
                            </SView>

                            <SIcon name={'IconMenuBg'} width={"100%"} />
                        </SView>

                        <SView col={'xs-12'} height={18} center backgroundColor={'transparent'}   >
                            <SText fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}>{obj.descripcion}</SText>
                            <SText fontSize={12} font={"Roboto-Light"} color={'#BEB2B2'} style={{ textTransform: "capitalize" }}>Ubicación: {obj.direccion}</SText>
                        </SView>
                    </SView>
                    <SView col={'xs-12'} height={40} />
                </SView>


            </>
        })
    }
    render() {
        return (
            <>
                <SPage title={"Inmuebles"} center>
                    <SView col={'xs-12'} height={40} />

                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center>
                        {this.getAll()}
                    </SView>
                </SPage>
                <FloatButtom onPress={() => {
                    SNavigation.navigate("inmueble/registro")
                }} />
            </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(lista);