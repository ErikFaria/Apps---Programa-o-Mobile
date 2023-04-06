import React, {useState} from 'react';
import { View, Text, Button, Image} from 'react-native';
import {styles} from './styles.js';
 
export default function App(){
  const [resultado, setResultado] = useState(0)
 
  function calcular(){
    setResultado(Math.floor(Math.random() * 10));
  }
 
    return(
      <View style={styles.container}>
        <Text style={styles.texto}>Jogo do Nº Aleatório</Text>
        <View style={styles.imagemCharada}>
          <Image source={('https://images.uncyc.org/pt/thumb/9/96/Riddler1.gif/200px-Riddler1.gif')} style={styles.imagem}/>
        </View>
        <Text style={styles.texto2}>Pense em um número de 0 a 10</Text>
        <Text style={styles.texto1}> {resultado} </Text>
        <View style={styles.botao}>
          <Button title="DESCOBRIR" onPress={calcular} />
        </View>
      </View>
    );
}
 
