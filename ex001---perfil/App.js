import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import {styles} from './Styles';

export default function App(){
    return(
      <View>
        <Image
          source={{ uri: 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg'}}
          style={styles.imagem}
        />

        <Text style={styles.container}>Dados Pessoais:{`\n`}  Erik Faria da Silva{`\n`}  19 anos {`\n`} </Text>

        <Text style={styles.container}>Formação:{`\n`}  Cursando Analise e Desenvolvimento de Sistemas - FATEC-PG{`\n`} </Text>

        <Text style={styles.container}>Experiencias:{`\n`}  Trabalhei em supermecado pelo Camp-PG{`\n`} </Text>

        <Text style={styles.container}>Projetos:{`\n`}  Desenvolvi um CRUD de estoque em PHP, com sessões de login </Text>
      </View>
    )  
}
