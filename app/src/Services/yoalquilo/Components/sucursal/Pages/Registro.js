import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SPage, SNavigation, SLoad, SView } from 'servisofts-component';
import Parent from '../index'

class Registro extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.key = SNavigation.getParam("key");
    }

    getContent() {
        this.data = {};
        if (this.key) {
            this.data = Parent.Actions.getByKey(this.key, this.props);
            if (!this.data) return <SLoad />
        }
        return <SForm
            ref={(form) => { this.form = form; }}
            col={"xs-11 sm-9 md-7 lg-5 xl-4"}
            inputProps={{
                customStyle: "calistenia"
            }}
            inputs={{
                key_empresa: { label: "key_empresa", isRequired: true, defaultValue: this.data["key_empresa"] },
                key_usuario: { label: "key_usuario", isRequired: true, defaultValue: this.data["key_usuario"] },
                descripcion: { label: "descripcion", isRequired: true, defaultValue: this.data["descripcion"] },
                direccion: { label: "direccion", isRequired: true, defaultValue: this.data["direccion"] },
            }}
            onSubmitName={(this.key ? "Aceptar" : "Registrar")}
            onSubmit={(values) => {
                if (this.key) {
                    Parent.Actions.editar({
                        ...this.data,
                        ...values
                    }, this.props);
                } else {
                    Parent.Actions.registro(values, this.props);
                }
            }}
        />
    }

    render() {
        if (Parent.Actions.getEstado("registro", this.props) == "exito" || Parent.Actions.getEstado("editar", this.props) == "exito") {
            Parent.Actions.resetEstado(this.props);
            SNavigation.goBack();
        }
        return (
            <SPage title={'Registro de ' + Parent.component} center>
                <SView height={30}></SView>
                {this.getContent()}
                <SHr />
            </SPage>
        );
    }
    
}

const initStates = (state) => {
    return { state }
};

export default connect(initStates)(Registro);