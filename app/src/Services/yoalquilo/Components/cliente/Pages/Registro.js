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
                ci: { label: "ci", isRequired: true, defaultValue: this.data["ci"] },
                alias: { label: "alias", isRequired: true, defaultValue: this.data["alias"] },
                nombres: { label: "nombres", isRequired: true, defaultValue: this.data["nombres"] },
                apellidos: { label: "apellidos", isRequired: true, defaultValue: this.data["apellidos"] },
                contacto: { label: "contacto", isRequired: true, defaultValue: this.data["contacto"] },
                telefono: { label: "telefono", isRequired: true, defaultValue: this.data["telefono"] },
                foto_documento_frontal: { label: "foto_documento_frontal", isRequired: true, defaultValue: this.data["foto_documento_frontal"] },
                foto_documento_reverso: { label: "foto_documento_reverso", isRequired: true, defaultValue: this.data["foto_documento_reverso"] },
                key_empresa: { label: "key_empresa", isRequired: true, defaultValue: this.data["key_empresa"] },
                key_pais: { label: "key_pais", isRequired: true, defaultValue: this.data["key_pais"] },
                key_usuario: { label: "key_usuario", isRequired: true, defaultValue: this.data["key_usuario"] },

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