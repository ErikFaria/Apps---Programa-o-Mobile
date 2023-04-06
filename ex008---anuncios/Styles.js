import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box:{
    height: 150,
  },
  textoTittle:{
    fontSize: 50,
    textAlign: 'center',
    color: 'blue',
    margin: 50,
  },
  imagem:{
    resizeMode: 'stretch',
    height: 120,
    width: 120,
    marginTop: 30,
    borderRadius: 5,
  },
  texto:{
    fontSize: 13,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  box0:{
    alignItems: 'center',
    height: 250,
    width: 395,
    margin: 10,
    borderColor: 'black',
  },
  box1:{
    alignItems: 'center',
    backgroundColor: '#B0C4DE',
    height: 250,
    width: 200,
    marginRight: 10,
    marginLeft: 10,
  },
})
export {styles};