import React, { Component } from 'react';
import View from 'react-native';
import { connect } from 'react-redux';
import { SButtom, SHr, SImage, SLoad, SNavigation, SPage, SText, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import BarraSuperior from '../../Components/BarraSuperior';
import BotonesPaginas from '../../Components/BotonesPaginas';
import NavBar from '../../Components/NavBar';
import Usuario from '../../Services/Usuario/Components/usuario';

class Edificio_Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {



        return (
            <SPage title="Registro Surcusal">
                <SView col={"xs-12"} row center backgroundColor={'red'} >

                </SView>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Edificio_Registro);