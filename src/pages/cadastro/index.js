import React, { useState } from 'react'
import { SafeAreaView, View, StyleSheet, Button, TextInput, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


export default function Cadastro() {

  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function EnviarLogin () {
    navigation.navigate('Login')
  }

  async function cadastrar() {
    createUserWithEmailAndPassword(auth, email, password).
      then((value) => {
        const user = value.user
        alert('Usuario cadastrado com sucesso ');
        navigation.navigate('Home')

      }).catch((error) => {
        alert("Erro no cadastro do usuario, por favor tente mais tarde")
        console.log(error)
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.area}>

        <View style={styles.areaInput}>
          <Text style={styles.text}> Seu Email: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
          />

          <Text style={styles.text}> Sua Senha: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
          />

          <Button
            title='cadastrar' onPress={cadastrar} />
        </View>

        <Button
        style={styles.btn}
          title='Ja tem uma conta?'
          onPress={EnviarLogin}
        />

      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  areaInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    marginRight: 200
  },
  input: {
    width: 300,
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10
  },
  btn: {
    
  }


});
