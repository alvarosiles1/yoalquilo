import java.io.Console;
import org.json.JSONObject;
import Server.SSSAbstract.SSSessionAbstract;
import Servisofts.SConsole;
import component.empresa;
import component.servicio;
import component.subordinado;
import component.sucursal;

public class Manejador {
    public static void onMessage(JSONObject obj, SSSessionAbstract session) {

        if (session != null) {
            SConsole.log(session.getIdSession(), "\t|\t", obj.getString("component"), obj.getString("type"));
        }
        if (!obj.isNull("component")) {
            switch (obj.getString("component")) {
                case "empresa":
                    new empresa(obj, session);
                    break;

                case "sucursal":
                    new sucursal(obj, session);
                    break;

                case "servicio":
                    new servicio(obj, session);
                    break;

                case "subordinado":
                    new subordinado(obj, session);
                    break;

            }
        }
    }
}
