
// import java.io.Console;
import org.json.JSONObject;
import Server.SSSAbstract.SSSessionAbstract;
import Servisofts.SConsole;
import component.alquiler;
import component.alquiler_detalle;
import component.cliente;
import component.cliente_foto;
import component.cliente_subordinado;
import component.pago;
import component.pago_detalle;
import component.servicios;
import component.servicios_detalle;
import component.inmueble;

public class Manejador {
    public static void onMessage(JSONObject obj, SSSessionAbstract session) {

        if (session != null) {
            SConsole.log(session.getIdSession(), "\t|\t", obj.getString("component"), obj.getString("type"));
        }
        if (!obj.isNull("component")) {
            switch (obj.getString("component")) {
                case "inmueble":
                    new inmueble(obj, session);
                    break;
                case "servicios":
                    new servicios(obj, session);
                    break;
                case "servicios_detalle":
                    new servicios_detalle(obj, session);
                    break;
                case "cliente":
                    new cliente(obj, session);
                    break;
                case "cliente_foto":
                    new cliente_foto(obj, session);
                    break;
                case "cliente_subordinado":
                    new cliente_subordinado(obj, session);
                    break;
                case "alquiler":
                    new alquiler(obj, session);
                    break;
                case "alquiler_detalle":
                    new alquiler_detalle(obj, session);
                    break;
                case "pago":
                    new pago(obj, session);
                    break;
                case "pago_detalle":
                    new pago_detalle(obj, session);
                    break;
            }
        }
    }
}
