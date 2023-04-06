import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 30,
    padding: 10,
  },
  imagemPosto: {
    alignItems: 'center',
    marginTop: 20,
  },
  botao: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  imagem: {
    width: 250,
    height: 150,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 100
  },
  texto1:{
    textAlign: 'center',
    fontSize: 25,
  }
});

export {styles};