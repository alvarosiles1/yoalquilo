import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SHr, SNavigation, SPage, SText, SView } from 'servisofts-component';
import inmueble from '..';
import FloatButtom from '../../../../../Components/FloatButtom';

class lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                <SView col={"xs-11"} card height={50} center>
                    <SText fontSize={18}>{obj.descripcion}</SText>
                </SView>
                <SHr />
            </>
        })
    }
    render() {
        return (
            <>
                <SPage title={"Inmuebles"} center>
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