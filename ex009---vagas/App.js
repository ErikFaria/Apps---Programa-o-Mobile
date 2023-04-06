import { View, ScrollView, Text } from 'react-native';
import {styles} from './Styles';
 
export default function App(){
    return(
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.textoTittle}>Vagas de TI</Text>
        </View>
        <View style={styles.box0}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.box1}>
              <Text style={styles.textoTittle2}>Desenvolvedor BackEnd</Text>
              <Text style={styles.textoTittle3}>Salário: R$ 3.000,00</Text>
              <Text style={styles.textoTittle4}>Descrição: Vaga para BackEnd em Java, para desenvolvimento de APIS para sistemas novos</Text>
              <Text style={styles.  textoTittle4}>Contato: vagas.confia.javaAPI@outmail.com</Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.textoTittle2}>Engenheiro de Dados</Text>
              <Text style={styles.textoTittle3}>Salário: R$ 4.000,00</Text>
              <Text style={styles.textoTittle4}>Descrição: Vaga de Engenheiro de Dados para elaborar o design, criação e entrega da ingestão e integração</Text>
              <Text style={styles.textoTittle4}>Contato: vagas.confia.engDados@outmail.com </Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.textoTittle2}>Desenvolvedor FrontEnd</Text>
              <Text style={styles.textoTittle3}>Salário: R$ 2.000,00</Text>
              <Text style={styles.textoTittle4}>Descrição: Vaga de FrontEnd, para o desenvolvimento de telas com: JavaScript, HTML e CSS</Text>
              <Text style={styles.textoTittle4}>Contato: vagas.confia.javaScript@outmail.com</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    )
}