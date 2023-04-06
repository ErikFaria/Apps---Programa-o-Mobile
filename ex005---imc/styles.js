import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  entrada: {
    justifyContent: "center",
    alignItems: "center"
  },
  textoTittle:{
    fontSize: 30,
    textAlign: "center",
    color: "blue",
  },
  imagemIMC: {
    alignItems: 'center',
    marginTop: 20,
  },
  imagem: {
    width: 150,
    height: 150,
  },
  botao: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  input: {
    height: 50,
    textAlign: "center",
    fontSize: 25,
    marginTop: 40
  },
  resultado: {
    alignSelf: "center",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    padding: 0,
    marginTop: 10
  }
});

export {styles};