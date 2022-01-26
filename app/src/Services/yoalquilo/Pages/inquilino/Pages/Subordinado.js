import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SPage, SText } from 'servisofts-component';

class Subordinado extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'Subordinado'}>

                <SText>{'Subordinado'}</SText>

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Subordinado);