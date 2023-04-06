
import { View, ScrollView, Text, Image } from 'react-native';
import {styles} from './Styles';

 
export default function App(){
    return(
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.textoTittle}>Anúncios</Text>
        </View>
        
        <View style={styles.box0}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.box1}>
            </View>
            <View style={styles.box1}>
            </View>
            <View style={styles.box1}>
            </View>

            <View style={styles.box1}>
              <Image source={require('./Imagens/gas.jfif')} style={styles.imagem} />
              <Text style={styles.texto}>Gás Cinza</Text>
              <Text style={styles.texto}>Valor: R$ 50,00</Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./Imagens/azul.jfif')} style={styles.imagem} />
              <Text style={styles.texto}>Gás Azul - Brabo</Text>
              <Text style={styles.texto}>Valor: R$ 200,00</Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./Imagens/dou.jfif')} style={styles.imagem} />
              <Text style={styles.texto}>Gás Dourando - :)</Text>
              <Text style={styles.texto}>Valor: Indetermidado</Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./Imagens/azul.jfif')} style={styles.imagem} />
              <Text style={styles.texto}>Gás Azul - Brabo</Text>
              <Text style={styles.texto}>Valor: R$ 200,00</Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./Imagens/gas.jfif')} style={styles.imagem} />
              <Text style={styles.texto}>Gás Cinza</Text>
              <Text style={styles.texto}>Valor: R$ 50,00</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    )
}