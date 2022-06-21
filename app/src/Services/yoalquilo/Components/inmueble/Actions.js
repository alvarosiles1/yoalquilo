import SSocket from "servisofts-socket";
import Parent from "./index";
// import Service from '../../index';

export default class Actions {
  static getIcon(tipo) {
    switch (tipo) {
      case "Casa":
        return "IconMenuCasa";
      case "Edificio":
        return "IconMenuEdificio";
      case "Condominio":
        return "IconMenuCondominio";
      case "Hotel":
        return "IconMenuHotel";
      case "Hostal":
        return "IconMenuHotel";
      case "Alojamiento":
        return "IconMenuHotel";
      case "Motel":
        return "IconMenuMotel";
      default:
        return "YAHome";
    }
  }

  static _getReducer = (props) => {
    return props.state[Parent.component + "Reducer"];
  };

  static getAllActivas = (props) => {
    var reducer = Actions._getReducer(props);
    var data = reducer.activas;
    if (!data) {
      if (reducer.estado == "cargando") return null;
      SSocket.send({
        component: Parent.component,
        version: Parent.version,
        type: "getAllActivas",
        estado: "cargando",
        // key_usuario: props.state.usuarioReducer.usuarioLog.key,
        key_usuario: "a296a6c1-5273-4f9e-b597-1be940252818",
      });
      return null;
    }
    return data;
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
        key_usuario: props.state.usuarioReducer.usuarioLog.key,
      });
      return null;
    }
    return data;
  };

  static getByKey = (key, props) => {
    var data = Actions.getAllActivas(props);
    if (!data) return null;
    return data[key];
  };

  static registro = (data, props) => {
    SSocket.send({
      component: Parent.component,
      version: Parent.version,
      type: "registro",
      estado: "cargando",
      //   key_usuario: usuario,
      key_usuario: "a296a6c1-5273-4f9e-b597-1be940252818",
      data: {
        // key_usuario: usuario,
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
      //   key_usuario: usuario,
      key_usuario: "a296a6c1-5273-4f9e-b597-1be940252818",
      data: {
        // key_usuario: usuario,
        key_usuario: "a296a6c1-5273-4f9e-b597-1be940252818",
        ...data,
      },
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
