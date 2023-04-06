import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
import { styles } from './styles';

export default function App(){
  const [valor1, setValor1] = useState(0)
  const [valor2, setValor2] = useState(0)
  const [resultado, setResultado] = useState("")
  const [resultado1, setResultado1] = useState(0)
 
  function calcular(){
    setResultado1(setValor1 / setValor2);
    if(valor1 == valor2){
      setResultado("Qualquer um!");
    } else if(resultado1 < 0.7) {
      setResultado("Álcool");
    } else {
      setResultado("Gasolina");
    }
  }
 
    return(
      <View style={styles.container}>
        <Text style={styles.texto}>Álcool ou Gasolina </Text>

        <View style={styles.imagemPosto}>
          <Image source={('https://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg')} style={styles.imagem} />
        </View>
      
        <TextInput style={styles.input} placeholder="Preço do Álcool" onChangeText={(valor) => setValor1(valor)} keyboardType="numeric" />

        <TextInput style={styles.input} placeholder="Preço da Gasolina" onChangeText={(valor) => setValor2(valor)} keyboardType="numeric" />

        <View style={styles.botao}>
          <Button title="Verificar" onPress={calcular} />
        </View>

        <Text style={styles.texto1}> Resultado: {resultado} </Text>
      </View>
    );
}