import SSocket from 'servisofts-socket';
import Parent from './index';

export default class Actions {

    static _getReducer = (props) => {
        return props.state[Parent.component + "Reducer"];
    }

    static resetEstado = (props) => {
        var reducer = Actions._getReducer(props);
        reducer.estado = "";
    }

    static getEstado = (type, props) => {
        var reducer = Actions._getReducer(props);
        if (!type) return reducer.estado;
        if (type == reducer.type) return reducer.estado;
        return "";
    }

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
                key_usuario: "",
            })
            return null;
        }
        return data;
    }

    static getByKey = (key, props) => {
        var data = Actions.getAll(props);
        if (!data) return null;
        return data[key];
    }

    static registro = (data, props) => {
        SSocket.send({
            component: Parent.component,
            version: Parent.version,
            type: "registro",
            estado: "cargando",
            key_usuario: "",
            data: data
        })
    }

    static editar = (data, props) => {
        SSocket.send({
            component: Parent.component,
            version: Parent.version,
            type: "editar",
            estado: "cargando",
            key_usuario: "",
            data: data
        })
    }

    static eliminar = (data, props) => {
        SSocket.send({
            component: Parent.component,
            version: Parent.version,
            type: "editar",
            estado: "cargando",
            key_usuario: "",
            data: { ...data, estado: 0 }
        })
    }
}