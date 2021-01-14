import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_300Light,
} from '@expo-google-fonts/roboto'
import { AppLoading } from 'expo'

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_300Light,
  })
  const [loginValue, setLoginValue] = React.useState('')
  const [passwordValue, setPasswordValue] = React.useState('')
  const [isPressed, setIsPressed] = React.useState(false)

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.header}>Simple Flight Check</Text>
          <Text style={styles.label}>Логин:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setLoginValue(text)}
            value={loginValue}
          />
          <Text style={styles.label}>Пароль:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPasswordValue(text)}
            value={passwordValue}
          />
          <Pressable
            style={
              isPressed ? [styles.button, styles.buttonPresssed] : styles.button
            }
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
          >
            <LinearGradient
              style={styles.gradient}
              start={{ x: 0.3, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[-0.15, 1.46]}
              colors={
                isPressed ? ['#5362BE', '#4AD5FF'] : ['#3C4CAD', '#00C3FF']
              }
            >
              <Text style={styles.buttonText}>Войти</Text>
            </LinearGradient>
          </Pressable>
        </View>
        <StatusBar style='auto' />
      </View>
    )
  } else {
    return AppLoading
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backgroundImage:
      'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(https://res.cloudinary.com/martynov-dm/image/upload/c_limit,h_972,q_50,w_1501/v1610614940/projects_images/b4eaba0df84d2f013ec2c05b2908705b_hmqfis.jpg)',
    backgroundSize: 'cover',
  },
  formContainer: {
    display: 'flex',
    alignItems: 'center',

    width: 410,
    height: 338,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 24,
    lineHeight: 28.13,

    marginTop: 53,
    marginBottom: 16,
  },
  input: {
    boxSizing: 'border-box',

    width: 345,
    height: 34,
    marginBottom: 25,

    borderRadius: 4,
    border: ' 1px solid #C9CACC',
  },
  label: {
    fontFamily: 'Roboto_300Light',
    marginRight: 'auto',
    marginLeft: 33,
    marginBottom: 7,
    fontSize: 16,
    lineHeight: 19,
    color: '#424242',
  },
  button: {
    boxSizing: 'content-box',
    cursor: 'pointer',
    width: 116,
    height: 34,
    marginLeft: 'auto',
    marginRight: 32,
    marginBottom: 7,
    borderRadius: 6,

    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.15)',
  },
  buttonPresssed: { borderColor: 'rgba(29, 138, 216, 0.3)', borderWidth: 2 },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',

    borderRadius: 4,
  },
  buttonText: {
    fontFamily: 'Roboto_400Regular',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19,
  },
})

export default App
