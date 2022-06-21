package component;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;
import org.json.JSONArray;
import org.json.JSONObject;
import Server.SSSAbstract.SSSessionAbstract;
import Servisofts.SPGConect;

public class servicio_detalle {
    private final static String component = "servicio_detalle";

    public servicio_detalle(JSONObject obj, SSSessionAbstract sesion) {
        switch (obj.getString("type")) {
            case "getAll":
                getAll(obj, sesion);
                break;
            case "registro":
                registro(obj, sesion);
                break;
            case "editar":
                editar(obj, sesion);
                break;
        }
    }

    public void getAll(JSONObject obj, SSSessionAbstract sesion) {
        try {
            String consulta = "select jsonb_object_agg(" + component + ".key, to_json(" + component
                    + ".*)) as json from " + component + " where " + component + ".estado = 1";
            JSONObject data = SPGConect.ejecutarConsultaObject(consulta);
            obj.put("data", data);
            obj.put("estado", "exito");
        } catch (Exception e) {
            obj.put("estado", "error");
            e.printStackTrace();
        }
    }

    public void registro(JSONObject obj, SSSessionAbstract sesion) {
        try {
            DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSSSS");
            JSONObject data = obj.getJSONObject("data");
            data.put("key", UUID.randomUUID().toString());
            data.put("key_usuario", obj.getString("key_usuario"));
            data.put("fecha_on", formatter.format(new Date()));
            data.put("estado", 1);
            SPGConect.insertArray(component, new JSONArray().put(data));
            obj.put("data", data);
            obj.put("estado", "exito");
        } catch (Exception e) {
            obj.put("estado", "error");
            e.printStackTrace();
        }
    }

    public void editar(JSONObject obj, SSSessionAbstract sesion) {
        try {
            JSONObject data = obj.getJSONObject("data");
            SPGConect.editObject(component, data);
            obj.put("data", data);
            obj.put("estado", "exito");
        } catch (Exception e) {
            obj.put("estado", "error");
            e.printStackTrace();
        }
    }
}
