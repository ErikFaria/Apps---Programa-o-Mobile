import React, {useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {styles} from './Styles';

export default function App(){
  const [qtdeMoeda, setQtdeMoeda] = useState(0.00)
  const [deValor, setDeValor] = useState(1)
  const [paraValor, setParaValor] = useState(1)
  const [resultado, setResultado] = useState("")

  function calculo(){
    if(deValor == 3 && paraValor == 1) {
      setResultado('US$ ' + (qtdeMoeda * 0.19).toFixed(2));
    } else if (deValor == 3 && paraValor == 2) {
      setResultado((qtdeMoeda * 0.18).toFixed(2) + ' €');
    } else if (deValor == 3 && paraValor == 3) {
      setResultado('R$ ' + (qtdeMoeda * 1.00).toFixed(2));
    } else if (deValor == 2 && paraValor == 1) {
      setResultado('US$ ' + (qtdeMoeda * 1.08).toFixed(2));
    } else if (deValor == 2 && paraValor == 2) {
      setResultado((qtdeMoeda * 1.00).toFixed(2) + ' €');
    } else if (deValor == 2 && paraValor == 3) {
      setResultado('R$ ' + (qtdeMoeda * 5.66).toFixed(2));
    } else if (deValor == 1 && paraValor == 1) {
      setResultado('US$ ' + (qtdeMoeda * 1.00).toFixed(2));
    } else if (deValor == 1 && paraValor == 2) {
      setResultado((qtdeMoeda * 0.93).toFixed(2) + ' €');
    } else if (deValor == 1 && paraValor == 3) {
      setResultado('R$ ' + (qtdeMoeda * 5.26).toFixed(2));
    }
  }

    return (
      <View style={styles.container}>

        <Text style={styles.textoTittle}>Conversor de Moedas</Text>
        <Text style={styles.textoTittle2}>Real, Dólar, Euro</Text>

        <Text style={styles.textoTittle1}>Valor:</Text>
        <TextInput style={styles.input} placeholder="Insira o valor aqui" onChangeText={(qtdeMoeda) => setQtdeMoeda(qtdeMoeda)} keyboardType="numeric" />

        <Text style={styles.textoDados}>De:</Text>
        
        <Picker
          selectedValue={deValor}
          onValueChange={(itemValue) =>
          setDeValor(itemValue)
        }>
          <Picker.Item key={1} value={1} label="Dólar" />
          <Picker.Item key={2} value={2} label="Euro" />
          <Picker.Item key={3} value={3} label="Real" />
        </Picker>
        
        <Text style={styles.textoDados}>Para:</Text>
        <Picker
          selectedValue={paraValor}
          onValueChange={(itemValue) =>
          setParaValor(itemValue)
        }>
          <Picker.Item key={1} value={1} label="Dólar" />
          <Picker.Item key={2} value={2} label="Euro" />
          <Picker.Item key={3} value={3} label="Real" />
        </Picker>

        <View style={styles.viewMode}></View>

        <Button title="Converter" onPress={calculo} />

        <Text style={styles.texto1}>Resultado:</Text>
        <Text style={styles.texto1}> {resultado} </Text>

      </View>
    );
}
