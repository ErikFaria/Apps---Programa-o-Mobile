import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';
import {styles} from './Styles';

export default function App(){
  const [numero, setNumero] = useState(0)
  
  function adicionar(){
    setNumero(numero + 1)
  }

  function subtrair(){
    if(numero > 0){
      setNumero(numero - 1)
    }
  }

  return(
      <View>
        <Text style={styles.texto1}>Contador de Pessoas </Text>

        <Text style={styles.texto2}>
        {numero}
        </Text>

        <View style={styles.botao1}>
          <Button style={{}} color = 'green' title="+" onPress={() => adicionar()} />
        </View>

        <View style={styles.botao2}>
        <Button style={styles.botao2} color = 'red' title="-" onPress={() => subtrair()} />
        </View>
      </View>
    )
}
