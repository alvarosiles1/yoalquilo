import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SLoad, SPage, SText, SView } from 'servisofts-component';
import usuario from '../../Services/Usuario/Components/usuario';
import Barra from './Barra';
import Inmueble from './Inmueble';

const INMUEBLES = {
    "1": {
        key: "1",
        descripcion: "Casa",
        direccion: "Calle 1 # 1-1",
        tipo: "casa",
    },
    "2": {
        key: "2",
        descripcion: "Departamento",
        direccion: "Calle 2 # 2-2",
        tipo: "departamento",
    },
}

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getLista() {
        return Object.keys(INMUEBLES).map(key => {
            var obj = INMUEBLES[key];
            return <>
                <SView width={16} />
                <Inmueble data={obj} />
            </>
        })
    }
    render() {
        if (!usuario.Actions.validateSession(this.props)) {
            return <SLoad />
        }
        return (
            <>
                <Barra />
                <SPage title={'HomePage'} hidden>
                    <SHr/>
                    <SView col={"xs-12"} row>
                        {this.getLista()}
                    </SView>
                </SPage>
            </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(HomePage);