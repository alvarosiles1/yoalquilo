import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SLoad, SPage, SText } from 'servisofts-component';
import BarraSuperior from '../../Components/BarraSuperior';
import usuario from '../../Services/Usuario/Components/usuario';
import Barra from './Barra';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        if (!usuario.Actions.validateSession(this.props)) {
            return <SLoad />
        }
        return (
            <SPage title={'HomePage'} hidden>
                <Barra/>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(HomePage);