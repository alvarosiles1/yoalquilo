import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import {
  SHr,
  SIcon,
  SNavigation,
  SPage,
  SText,
  STheme,
  SLoad,
  SView,
} from "servisofts-component";
import inmueble from "..";

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.key_inmueble = SNavigation.getParam("key_inmueble");
  }

  getPerfil() {
    this.data = {};
    if (this.key_inmueble) {
      this.data = inmueble.Actions.getByKey(this.key_inmueble, this.props);
      if (!this.data) return <SLoad />;
    }

    return (
      <>
        <SView col={"xs-12 md-10 lg-8 xl-6"} row center border={"red"}>
          <SView col={"xs-8"} row center>
            <SView col={"xs-5 xl-2"} row center>
              <SView style={{ width: 120, height: 120 }} row center>
                <SIcon
                  name={inmueble.Actions.getIcon(this.data.tipo_inmueble)}
                  width={80}
                  height={80}
                  fill={STheme.color.primary}
                />
              </SView>
            </SView>
            <SView col={"xs-7"} row center>
              <SView col={"xs-12"}>
                <SText
                  fontSize={18}
                  bold
                  font={"Roboto-Light"}
                  color={"#212121"}
                  style={{ textTransform: "capitalize" }}
                >
                  {this.data.descripcion}{" "}
                </SText>
                <SText
                  fontSize={16}
                  font={"Roboto-Light"}
                  color={"#212121"}
                  style={{ textTransform: "capitalize" }}
                >
                  Tipo: {this.data.tipo_inmueble}
                </SText>
                <SHr />
                <SText
                  fontSize={16}
                  font={"Roboto-Light"}
                  color={"#212121"}
                  style={{ textTransform: "capitalize" }}
                >
                  dirección: {this.data.direccion}{" "}
                </SText>
              </SView>
            </SView>
          </SView>
          <SView col={"xs-4"} row center>
            <SView
              width={100}
              height={30}
              row
              center
              onPress={() => {
                SNavigation.navigate("inmueble/registro", {
                  key_inmueble: this.key_inmueble,
                });
              }}
            >
              <SView
                col={"xs-12"}
                height
                style={{
                  borderRadius: 20,
                  backgroundColor: "#F6F6F6",
                }}
                center
              >
                <SText
                  fontSize={16}
                  font={"Roboto-Light"}
                  color={"#212121"}
                  style={{ textTransform: "capitalize" }}
                >
                  Perfil
                </SText>
              </SView>
            </SView>
          </SView>
        </SView>
      </>
    );
  }

  getList(icono, descripcion, url, prop) {
    return (
      <>
        <SView col={"xs-6 md-4 lg-3 xl-3"} row center border={"transparent"}>
          <SView
            width={130}
            height={150}
            row
            center
            onPress={() => {
              SNavigation.navigate(url, prop);
            }}
          >
            <SView
              style={{
                width: 120,
                height: 120,
                borderRadius: 20,
                backgroundColor: "#F6F6F6",
              }}
              center
            >
              <SIcon
                name={icono}
                width={80}
                height={80}
                fill={STheme.color.primary}
              />
            </SView>
            <SView
              col={"xs-12"}
              height={18}
              center
              backgroundColor={"transparent"}
            >
              <SText
                fontSize={16}
                font={"Roboto-Light"}
                color={"#212121"}
                style={{ textTransform: "capitalize" }}
              >
                {" "}
                {descripcion}{" "}
              </SText>
            </SView>
          </SView>
          <SView col={"xs-12"} height={40} />
        </SView>
      </>
    );
  }

  render() {
    this.data = {};
    if (this.key_inmueble) {
      this.data = inmueble.Actions.getByKey(this.key_inmueble, this.props);
      if (!this.data) return <SLoad />;
    }

    // var data = inmueble.Actions.getByKey(this.key, this.props);
    // if (!data) return <SLoad />

    return (
      <SPage title={"Menu Inicio"}>
        <SView col={"xs-12"} height row center backgroundColor={"transparent"}>
          <SView
            col={"xs-12"}
            height={160}
            row
            center
            backgroundColor={"transparent"}
          >
            <SView col={"xs-12"} height={5} />

            {/* <SText center col={"xs-12"} fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> Tipo: {this.data.tipo}</SText>

						<SText center col={"xs-12"} fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> Condominio: {this.data.descripcion} </SText>

						<SText center col={"xs-12"} fontSize={16} font={"Roboto-Light"} color={'#212121'} style={{ textTransform: "capitalize" }}> Ubiacion: :{this.data.direccion}</SText> */}
            {this.getPerfil()}
          </SView>

          <SView col={"xs-12 md-10 lg-8 xl-6 "} row center>
            {/* {this.getList('IMenuHabitacion', 'Habitación', 'habitacion')} */}
            {this.getList("IMenuHabitacion", "Habitación", "habitacion", {
              key_inmueble: this.key_inmueble,
            })}
            {this.getList("IMenuServicio", "Servicios", "servicio", {
              key_inmueble: this.key_inmueble,
            })}
            {this.getList("IMenuInquilino", "Inquilino", "cliente", {
              key_inmueble: this.key_inmueble,
            })}
            {this.getList("IMenuPago", "Pago", "splash2")}
            {this.getList("IMenuReserva", "Reserva", "splash2")}
            {this.getList("IMenuReporte", "Reporte", "splash2")}
          </SView>
        </SView>
      </SPage>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(Perfil);
