import React, { Component } from 'react';
import View from 'react-native';
import { connect } from 'react-redux';
import { SButtom, SHr, SImage, SLoad, SNavigation, SPage, SText, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import BarraSuperior from '../../Components/BarraSuperior';
import BotonesPaginas from '../../Components/BotonesPaginas';
import NavBar from '../../Components/NavBar';
import Usuario from '../../Services/Usuario/Components/usuario';
// import { SSRolesPermisosGetPages, SSRolesPermisosValidate } from '../../SSRolesPermisos';

// import Usuario from '../Usuario';
// import UsuarioSession from '../Usuario';
class InicioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getPaginas() {
        var pages = []
        if (!pages) {
            return <SLoad />
        }
        return Object.keys(pages).map((key) => {
            var obj = pages[key];
            // console.log(obj)
            if (!obj.is_page) {
                return null;
            }
            // if (!SSRolesPermisosValidate({ page: obj.url, permiso: "ver" })) {
            //     return null;
            // }
            var urlImage = SSocket.api.rp + "page/" + obj.key;
            return <SView col={"xs-3 sm-2.5 md-2 lg-1.5 xl-1.3"} colSquare style={{
                padding: 4,
            }}>
                <SView flex onPress={() => {
                    SNavigation.navigate(obj.url)
                }}>
                    <SView center>
                        <SView col={"xs-7"} colSquare>
                            <SImage src={urlImage} style={{
                                width: "100%",
                                height: "100%",
                            }} />
                        </SView>
                    </SView>
                    <SHr />
                    <SView center>
                        <SText center fontSize={12}>{obj.descripcion}</SText>
                    </SView>
                </SView>
            </SView>

        });
    }


    render() {


        // if (!usuario.Actions.validateSession(this.props)) {
        //     return <SLoad />
        // }
        return (
            <SPage title="Inicio"
            >
                <SView col={"xs-12"} row center >
                    {/* {this.getPaginas()} */}
                </SView>

                <BotonesPaginas data={[
                    // { label: "Usuarios", url: "usuario", icon: "Usuarios_all" },
                    // { label: "Ajustes", url: "ajustes", icon: "Ajustes" },
                    // { label: "empresa", url: "empresa", icon: "Usuarios_all" },
                    // { label: "sucursal", url: "sucursal", icon: "Ajustes" },
                    // { label: "clientes", url: "cliente", icon: "Usuarios_all" },
                    // { label: "Servicios", url: "servicio", icon: "Ajustes" },
                    // { label: "subordinados", url: "subordinado", icon: "Usuarios_all" },

                    { label: "Edificio", url: "usuario", icon: "Ajustes" },
                    { label: "Sucursal", url: "ajustes", icon: "Ajustes" },
                    { label: "Habitación", url: "empresa", icon: "Ajustes" },
                    { label: "Servicios", url: "sucursal", icon: "Ajustes" },
                    { label: "Inquilino", url: "cliente", icon: "Usuarios_all" },
                    { label: "Pago", url: "servicio", icon: "Ajustes" },
                    { label: "Reservar", url: "subordinado", icon: "Ajustes" },
                    { label: "Reporte", url: "subordinado", icon: "Ajustes" },



                ]} />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(InicioPage);