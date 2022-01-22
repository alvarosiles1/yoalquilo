import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SPage, SText, SView } from 'servisofts-component';

class Inmueble extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SView width={150} height={200} row center   >

                <SView width={120} height={120} row center    >
                    <SView col={'xs-12'} height center card>
                        <SIcon name={'Girl'} width={80} height={80} />
                    </SView>
                    <SView col={'xs-12'} height={50} center  >
                        <SText fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}>{this.props.data?.descripcion}</SText>
                        <SText fontSize={12} font={"Roboto-Light"} color={'#BEB2B2'} style={{ textTransform: "capitalize" }}>{this.props.data?.direccion}</SText>
                    </SView>
                </SView>
            </SView >


        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Inmueble);