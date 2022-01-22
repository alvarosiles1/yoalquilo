import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SPage, SText, SView } from 'servisofts-component';

class Inmueble extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SView width={100} height={100} card>
                <SText>{this.props.data?.descripcion}</SText>
            </SView>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Inmueble);