import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, Image } from "react-native";
import { styles } from './styles';

export default function App(){
    const [altura, setAltura] = useState(0)
    const [massa, setMassa] = useState(0)
    const [resultado, setResultado] = useState(0)
    const [resultTexto, setResultTexto] = useState("Digite os valores corretamente")
   
  function calcular() {
    setResultado(massa / (altura * altura));
    if (massa < 10 || massa > 200) {
      console.log(massa);
      Alert.alert("Erro!", "Verifique valor do peso.");
      setResultTexto("Verifique valor do peso.");
      setResultado(0);
    } else if (altura < 1 || altura > 3) {
      Alert.alert("Erro!", "Verifique valor da altura.");
      setResultTexto("Verifique valor da altura.");
      setResultado(0);
    } else if (isNaN(altura)) {
      Alert.alert("Erro!", "Altura deve ser separada por '.' \nEx: 1.56");
      setResultTexto("Verifique valor da altura.");
      setResultado(0);
    } else if (resultado < 16) {
      setResultTexto("Muito abaixo do peso!");
    } else if (resultado < 17) {
      setResultTexto("Moderadamente abaixo do peso!");
    } else if (resultado < 18.5) {
      setResultTexto("Abaixo do peso!");
    } else if (resultado < 25) {
      setResultTexto("Saudável!");
    } else if (resultado < 30) {
      setResultTexto("Sobrepeso!");
    } else if (resultado < 35) {
      setResultTexto("Obesidade Grau 1°!");
    } else if (resultado < 40) {
      setResultTexto("Obesidade Grau 2°!");
    } else {
      setResultTexto("Obesidade Grau 3°");
    }
  }
  
    return (
      <View style={styles.container}>
        <Text style={styles.textoTittle}>Cálculo do IMC</Text>
        <View style={styles.imagemIMC}>
          <Image source={('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEH0LD7ASKvhtT2r5PAlyOqRAUxjVKlijIiA&usqp=CAU')} style={styles.imagem} />
        </View>
        <View style={styles.entrada}>
          <TextInput
            autoCapitalize="none"
            placeholder="Informe seu peso:"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(massa) => setMassa(massa)}
          />

          <TextInput
            autoCapitalize="none"
            placeholder="Informe sua altura:"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(altura) => setAltura(altura)}
          />
        </View>
        <View style={styles.botao}>
          <Button onPress={calcular} title="Calcular" />
        </View>
        <Text style={styles.resultado}>{resultado.toFixed(2)}</Text>
        <Text style={styles.resultado}>{resultTexto}</Text>
      </View>
    );
}