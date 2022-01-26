import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SForm, SNavigation, SPage } from 'servisofts-component';
import inmueble from '..';

class registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getForm() {
        return <SForm
            col={"xs-11 sm-10 md-8 lg-6 xl-4"}
            inputProps={{
                customStyle: "yoalquilo"
            }}
            inputs={{
                descripcion: { label: 'Descripcion', type: 'text', isRequired: true },
                direccion: { label: 'Direccion', type: 'text', isRequired: true },
                tipo: {
                    label: 'Tipo', type: 'select', defaultValue: '', isRequired: true, options: [
                        { key: "", content: " " },
                        { key: "casa", content: "Casita" },
                        { key: "edificio", content: "Edificio" },
                        { key: "condominio", content: "Condominio" },
                        { key: "hotel", content: "Hotel" },
                        { key: "hostal", content: "Hostal" },
                        { key: "alojamiento", content: "Alojamiento" },
                        { key: "motel", content: "Motel" },
                    ]
                },
            }}
            onSubmitName={"registrar"}
            onSubmit={(values) => {
                inmueble.Actions.registro(values, this.props);
            }}
        />
    }

    render() {
        var reducer = inmueble.Actions._getReducer(this.props);
        if(reducer.estado == "exito" && reducer.type == "registro"){
            reducer.estado = "";
            SNavigation.goBack();
        }
        return (
            <SPage title={"Registro"} center>
                {this.getForm()}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(registro);