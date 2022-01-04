import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, SPopup, STable2, SText, SView, SImage } from 'servisofts-component';
import FloatButtom from '../../../../../Components/FloatButtom';
import Parent from '../index';

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getContent() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        return <STable2
            header={[
                { key: "index", label: "#", width: 50 },
                { key: "ci", label: "ci", width: 150 },
                { key: "alias", label: "alias", width: 150 },
                { key: "nombres", label: "nombres", width: 150 },
                { key: "apellidos", label: "apellidos", width: 150 },
                
                { key: "contacto", label: "contacto", width: 150 },
                { key: "telefono", label: "telefono", width: 150 },
                { key: "foto_documento_frontal", label: "foto_documento_frontal", width: 150 },
                { key: "foto_documento_reverso", label: "foto_documento_reverso", width: 150 },
                { key: "key_empresa", label: "key_empresa", width: 150 },
                { key: "key_pais", label: "key_pais", width: 150 },
                { key: "key_usuario", label: "key_usuario", width: 150 },

                
                { key: "key-editar", label: "Editar", width: 50, center: true, component: (item) => { return <SView onPress={() => { SNavigation.navigate(Parent.component + "/registro", { key: item }) }}> <SIcon name={"Edit"} width={35} /></SView> } },
                { key: "key-eliminar", label: "Eliminar", width: 70, center: true, component: (key) => { return <SView width={35} height={35} onPress={() => { SPopup.confirm({ title: "Eliminar", message: "¿Esta seguro de eliminar?", onPress: () => { Parent.Actions.eliminar(data[key], this.props) } }) }}> <SIcon name={'Delete'} /> </SView> } },
            ]}
            filter={(data) => {
                if (data.estado != 1) return false;
                return true;
            }}
            data={data}
        />
    }

    render() {
        return (
            <SPage title={'Lista de ' + Parent.component} disableScroll center>
                {this.getContent()}
                <FloatButtom onPress={() => {
                    SNavigation.navigate(Parent.component + "/registro")
                }} />
            </SPage>
        );
    }

}
const initStates = (state) => {
    return { state }
};

export default connect(initStates)(Lista);