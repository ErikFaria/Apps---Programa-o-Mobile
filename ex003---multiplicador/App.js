import React, {useState} from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import {styles} from './styles';
 
export default function App(){
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [resultado, setResultado] = useState(0)
 
  function calcular(){
    if (num1 === 0 || num2 === 0) {
      alert('Erro, digite valores nos dois inputs')
      return;
    }
    setResultado(num1 * num2);
  }

    return(
      <View style={styles.container}>
        <Text style={styles.texto}>Multiplicador de Números</Text>

        <TextInput style={styles.input} placeholder="Digite o primeiro número" onChangeText={(valor) => setNum1(valor)} keyboardType="numeric" />

        <TextInput style={styles.input} placeholder="Digite o segundo número" onChangeText={(valor) => setNum2(valor)} keyboardType="numeric" />

        <View style={styles.botao}>
          <Button title="Calcular" onPress={calcular} />
        </View>
        
        <Text style={styles.texto1}> Resultado: {resultado} </Text>
      </View>
    );
}
 