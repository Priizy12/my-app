import React, { useState } from 'react'
import { SafeAreaView, View, StyleSheet, Button, TextInput, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


export default function Login() {

  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function Login() {
    signInWithEmailAndPassword(auth, email, password).
      then((value) => {
        const user = value.user
        alert('Usuario Logado com sucesso ');
        navigation.navigate('Home')

      }).catch((error) => {
        alert("Erro ao Logar Usuario, por favor preencha os campos corretamente")
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
            title='Logar' onPress={Login} />
        </View>

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
  }


});
