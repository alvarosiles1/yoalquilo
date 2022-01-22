# clase react #1

### Creacion de componente

```javascript
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const EmpresaItem = (props) => {
    var NuevoObjeto = props.dataAnimal
    if (!NuevoObjeto) NuevoObjeto = props.data;
    if (!NuevoObjeto) NuevoObjeto = props.data2;
    if (!NuevoObjeto) NuevoObjeto = props.data3;
    if (!NuevoObjeto) NuevoObjeto = props.data4;

    return <TouchableOpacity onPress={() => {
        if (props.onGato) {
            props.onGato(NuevoObjeto)
        }
    }}>
        <Text style={{
            fontSize: 40,
            color: "#fff",
        }}>{NuevoObjeto?.nombre}</Text>
    </TouchableOpacity>
}

const App = (props) => {
    const onPerro = (itm) => {
        console.log(itm)
    }
    return (
        <View style={{
            flex: 1,
            height: "100%",
            backgroundColor: "#000",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <EmpresaItem data={{ key: "1", nombre: "Empresa 1" }} onGato={onPerro} />
            <EmpresaItem data4={{ key: "1", nombre: "Empresa 1" }} onGato={onPerro} />
            <EmpresaItem dataAnimal={{ key: "2", nombre: "Empresa 2" }} onGato={onPerro} />
            <EmpresaItem dataAnimal={{ key: "3", nombre: "Empresa 3" }} onGato={onPerro} />

        </View>
    )
}
export default App;
```