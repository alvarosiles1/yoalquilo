import React, { Component } from "react";
import { connect } from "react-redux";
import { SForm, SLoad, SNavigation, SPage, SText } from "servisofts-component";

import servicios from "../../servicio";

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.key_inmueble = SNavigation.getParam("key_inmueble");
    this.key = SNavigation.getParam("key");
  }
  getForm() {
    this.data = {};
    if (this.key) {
      this.data = servicios.Actions.getByKey(this.key, this.props);
      // this.data = servicios.Actions.getByKey(this.key_inmueble, this.props);
      if (!this.data) return <SLoad />;
    }

    return (
      <SForm
        col={"xs-11 sm-10 md-8 lg-6 xl-4"}
        inputProps={{
          customStyle: "yoalquilo",
        }}
        inputs={{
          descripcion: {
            label: "Descripcion",
            type: "text",
            isRequired: true,
            defaultValue: this.data?.descripcion,
          },
          precio: {
            label: "Precio",
            type: "money",
            isRequired: true,
            defaultValue: this.data?.precio,
          },
          estado_servicio: {
            label: "Tipo",
            type: "select",
            defaultValue: this.data?.estado_servicio ?? "1",
            isRequired: true,
            options: [
              { key: "1", content: "Disponible" },
              { key: "2", content: "Ocupado" },
              { key: "3", content: "Reparación" },
            ],
          },
        }}
        onSubmitName={"registrar"}
        onSubmit={(values) => {
          if (this.key) {
            servicios.Actions.editar({ ...this.data, ...values }, this.props);
          } else {
            values.key_inmueble = this.key_inmueble;
            values.tipo_servicio = "Habitacion";
            servicios.Actions.registro(values, this.props);
          }
        }}
      />
    );
  }

  render() {
    var reducer = servicios.Actions._getReducer(this.props);
    if (
      reducer.estado == "exito" &&
      (reducer.type == "registro" || reducer.type == "editar")
    ) {
      reducer.estado = "";
      SNavigation.goBack();
      // SNavigation.navigate("habitacion", { key_inmueble: this.key_inmueble })
      // SNavigation.replace("habitacion", { key_inmueble: this.key_inmueble });
    }
    return (
      <SPage title={"Registro Habitación"} center>
        {this.getForm()}
      </SPage>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(Registro);
