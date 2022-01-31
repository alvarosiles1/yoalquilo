import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';



import { SHr, SIcon, SNavigation, SPage, SText, STheme, SLoad, SView } from 'servisofts-component';
import inmueble from '../../../Components/inmueble';


class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("pipoca");

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

    getPerfil() {

        this.data = {};
        if (this.key) {
            this.data = inmueble.Actions.getByKey(this.key, this.props);
            if (!this.data) return <SLoad />
        }

        return <>
            <SView col={'xs-12 md-10 lg-8 xl-6'} row center border={'red'}  >

                <SView col={'xs-8'} row center>
                    <SView col={'xs-5 xl-2'} row center  >
                        <SView style={{ width: 120, height: 120, }} row center >
                            <SIcon name={this.getIcon(this.data.tipo)} width={80} height={80} fill={'yellow'} />
                        </SView>
                    </SView>
                    <SView col={'xs-7'} row center  >
                        <SView col={'xs-12'}   >
                            <SText fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}>
                                Tipo: {this.data.tipo} </SText>
                            <SText fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}>
                                Descripcion: {this.data.descripcion} </SText>

                            <SText fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}>
                                dirección: {this.data.direccion} </SText>
                        </SView>
                    </SView>
                </SView>

                <SView col={'xs-4'} row center>
                    <SView width={100} height={30} row center onPress={() => { SNavigation.navigate('inmueble/registro', { pollo: this.key }) }}>
                        <SView col={'xs-12'} height style={{
                            borderRadius: 20, backgroundColor: "#F6F6F6",
                        }} center >
                            <SText fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> Perfil </SText>
                        </SView>
                    </SView>


                </SView>





            </SView>
        </>
    }

    getList(icono, descripcion, url) {
        return <>

            <SView col={'xs-6 md-4 lg-3 xl-3'} row center border={'transparent'}  >
                <SView width={130} height={150} row center onPress={() => { SNavigation.navigate(url) }}>
                    <SView style={{
                        width: 120, height: 120, borderRadius: 20, backgroundColor: "#F6F6F6",
                    }} center >
                        <SIcon name={icono} width={80} height={80} fill={STheme.color.primary} />
                    </SView>

                    <SView col={'xs-12'} height={18} center backgroundColor={'transparent'}   >
                        <SText fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> {descripcion} </SText>
                    </SView>
                </SView>
                <SView col={'xs-12'} height={40} />
            </SView>

        </>
    }


    render() {

        this.data = {};
        if (this.key) {
            this.data = inmueble.Actions.getByKey(this.key, this.props);
            if (!this.data) return <SLoad />
        }

        // var data = inmueble.Actions.getByKey(this.key, this.props);
        // if (!data) return <SLoad />


        return (
            <SPage title={'Menu Inicio'}>

                <SView col={"xs-12"} height row center backgroundColor={'transparent'} >

                    <SView col={"xs-12"} height={160} row center backgroundColor={'transparent'} >
                        <SView col={"xs-12"} height={5} />

                        {/* <SText center col={"xs-12"} fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> Tipo: {this.data.tipo}</SText>

						<SText center col={"xs-12"} fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> Condominio: {this.data.descripcion} </SText>

						<SText center col={"xs-12"} fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> Ubiacion: :{this.data.direccion}</SText> */}
                        {this.getPerfil()}
                    </SView>

                    <SView col={"xs-12 md-10 lg-8 xl-6 "} row center   >
                        {this.getList('IMenuHabitacion', 'Habitación', 'splash2')}
                        {this.getList('IMenuServicio', 'Servicios', 'splash2')}
                        {this.getList('IMenuInquilino', 'Inquilino', 'inquilino')}
                        {this.getList('IMenuPago', 'Pago', 'splash2')}
                        {this.getList('IMenuReserva', 'Reserva', 'splash2')}
                        {this.getList('IMenuReporte', 'Reporte', 'splash2')}
                    </SView>

                </SView>

            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Perfil);