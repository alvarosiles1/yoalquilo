import SSocket from "servisofts-socket";
import Parent from "./index";
// import Service from '../../index';

export default class Actions {
  static getIconservicios(tipo) {
    switch (tipo) {
      case "ac":
        return "IconServicioAc";
      case "garage":
        return "IconServicioGarage";
      case "llave":
        return "IconServicioKey";
      case "tv":
        return "IconServicioTv";
      case "wifi":
        return "IconServicioWifi";
      case "lavadora":
        return "IconServicioLavadora";
      case "escoba":
        return "IconServicioEscoba";
      default:
        return "IconServicioEscoba";
    }
  }

  static _getReducer = (props) => {
    return props.state[Parent.component + "Reducer"];
  };

  static getAll = (props) => {
    var reducer = Actions._getReducer(props);
    var data = reducer.data;
    if (!data) {
      if (reducer.estado == "cargando") return null;
      SSocket.send({
        component: Parent.component,
        version: Parent.version,
        type: "getAll",
        estado: "cargando",
        // key_usuario: props.state.usuarioReducer.usuarioLog.key,
        key_usuario: "a296a6c1-5273-4f9e-b597-1be940252818",
      });
      return null;
    }
    return data;
  };

  static getByKey = (key, props) => {
    var data = Actions.getAll(props);
    if (!data) return null;
    return data[key];
  };

  static registro = (data, props) => {
    SSocket.send({
      component: Parent.component,
      version: Parent.version,
      type: "registro",
      estado: "cargando",
      // key_usuario: props.state.usuarioReducer.usuarioLog.key,
      key_usuario: "a296a6c1-5273-4f9e-b597-1be940252818",
      data: {
        // key_usuario: props.state.usuarioReducer.usuarioLog.key,
        key_usuario: "a296a6c1-5273-4f9e-b597-1be940252818",
        ...data,
      },
    });
  };
  static editar = (data, props) => {
    SSocket.send({
      component: Parent.component,
      version: Parent.version,
      type: "editar",
      estado: "cargando",
      //   key_usuario: props.state.usuarioReducer.usuarioLog.key,
      key_usuario: "a296a6c1-5273-4f9e-b597-1be940252818",
      data: data,
    });
  };
  static eliminar = (data, props) => {
    SSocket.send({
      component: Parent.component,
      version: Parent.version,
      type: "editar",
      estado: "cargando",
      //   key_usuario: props.state.usuarioReducer.usuarioLog.key,
      key_usuario: "a296a6c1-5273-4f9e-b597-1be940252818",
      data: {
        ...data,
        estado: 0,
      },
    });
  };
}
