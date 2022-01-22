import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SLoad, SPage, SText } from 'servisofts-component';
import usuario from '../../Services/Usuario/Components/usuario';

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
                <SText fontSize={66}>{'HomePage'}</SText>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(HomePage);