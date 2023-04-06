import React, {useState} from 'react';
import { View, Text, Button, Switch, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {styles} from './Styles';
 
export default function App(){
    const [nomeUser, setNomeUser] = useState("")
    const [idadeUser, setIdadeUser] = useState(0)
    const [sexoValor, setSexoValor] = useState("")
    const [escolaridadeValor, setEscolaridadeValor] = useState(0)
    const [valorLimite, setValorLimite] = useState(0.00)
    const [status, setStatus] = useState(false)
    const [resultados, setResultados] = useState([])
    const [sexos, setSexos] = useState([
        { nome: 'Masculino', valor: 'masculino' },
        { nome: 'Feminino', valor: 'feminino' },])
    const [escolaridades, setEscolaridade] = useState([
        { nome: 'Ensino fundamental completo', valor: 'ensino fundamental completo' },
        { nome: 'Ensino fundamental incompleto', valor: 'ensino fundamental incompleto' },
        { nome: 'Ensino medio completo', valor: 'ensino medio completo' },
        { nome: 'Ensino medio incompleto', valor: 'ensino medio incompleto' },
        { nome: 'Ensino superior completo', valor: 'ensino superior completo' },
        { nome: 'Ensino superior incompleto', valor: 'ensino superior incompleto' },])

    function formulario(){
      setResultados([nomeUser, idadeUser, sexos[sexoValor].valor, escolaridades[escolaridadeValor].valor, valorLimite.toFixed(2), (status) ? "Sim" : "Não"]);
  }

    let sexoItem = sexos.map((valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />;
    });
    let escolaridadeItem = escolaridades.map((valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />;
    });

    return(
      <View style={styles.container}>
        <Text style={styles.textoTittle}>Abertura de Conta</Text>

        <Text style={styles.textoDados}>Nome: </Text>
        <TextInput style={styles.input} placeholder="Seu nome" onChangeText={(nomeUser) => setNomeUser(nomeUser)} 
        />

        <Text style={styles.textoDados}>Idade: </Text>
        <TextInput style={styles.input} placeholder="Sua idade" onChangeText={(idadeUser) => setIdadeUser(idadeUser)} keyboardType="numeric" />

        <Text style={styles.textoDados}>Sexo: </Text>
        <Picker
          selectedValue={sexoValor}
          onValueChange={(itemValue, itemIndex) =>
          setSexoValor(itemValue)
        }>
        {sexoItem}
        </Picker>

        <Text style={styles.textoDados}>Escolaridade: </Text>
        <Picker
          selectedValue={escolaridadeValor}
          onValueChange={(itemValue, itemIndex) =>
          setEscolaridadeValor(itemValue)
        }>
        {escolaridadeItem}
        </Picker>

        <Text style={styles.textoDados}>Limite: </Text>
        <Slider
          minimumValue={0}
          maximumValue={10000}
          step={150}
          minimumTrackTintColor='blue'
          thumbTintColor='blue'
          onValueChange={ (valorSelecionado) => setValorLimite(valorSelecionado)}
          value={valorLimite}
        />
        <Text style={{textAlign: 'center', fontSize: 16}}>
          R$ {valorLimite.toFixed(2)}
        </Text>

        <Text style={styles.textoDados}>Brasileiro: </Text>
        <Switch 
          value={status}
          onValueChange={ (valorSwitch) => setStatus(valorSwitch)}
        />

        <Button onPress={formulario} title="Confirmar" />

        <Text style={styles.textoTittle1}>Dados informados</Text>
        
        <Text style={styles.textoDados}>Nome: {resultados[0]}</Text>
        <Text style={styles.textoDados}>Idade: {resultados[1]}</Text>
        <Text style={styles.textoDados}>Sexo: {resultados[2]}</Text>
        <Text style={styles.textoDados}>Escolaridade: {resultados[3]}</Text>
        <Text style={styles.textoDados}>Limite: R$ {resultados[4]}</Text>
        <Text style={styles.textoDados}>Brasileiro: {resultados[5]}</Text>
      </View>
    ) 
}