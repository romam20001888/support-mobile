import * as React from 'react';
import {StyleSheet,View,TextInput,Text,Image } from 'react-native';
import {AsyncStorage} from 'react-native';

const AuthScreen = ({navigation}) => {
    const [Login, onChangeLogin] = React.useState('');
    const [Password, onChangePassword] = React.useState('');
    const [ErrorText, onChangeErrorText] = React.useState('');
    
    React.useEffect(async ()=>{
        try {
            const token = await AsyncStorage.getItem('@UserToken')
            if(token){
                navigation.navigate('HomeScreen', {name: 'Jane'})
            }
        } catch (error) {
            
        }
    },[])
    
    return (
        <View style={styles.container}>
            
            <View
                style={styles.logoContainer}
            >
                <Image 
                    style={styles.logo}
                    source={require('../images/logo.png')}
                />
            </View>
            <Text
                style={styles.h1}
            >
                Авторизация
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Логин"
                onChangeText={onChangeLogin}
                value={Login}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Пароль"
                onChangeText={onChangePassword}
                value={Password}
            />
            <Text
                style={ErrorText!==""?styles.error:styles.errorEmty}
            >
                {ErrorText}
            </Text>
            <Text
                style={styles.button}
                onPress={() =>{
                    onChangeErrorText("")
                    if(!Login){
                        onChangeErrorText("Пустой логин")
                        return false
                    }
                    if(!Password){
                        onChangeErrorText("Пустой пароль")
                        return false
                    }
                    AsyncStorage.setItem('@UserToken',"efas21123ewsda.ereafad3yhgjffg.3rfefasef")
                    navigation.navigate('HomeScreen', {name: 'Jane'})
                }}
            >
                Войти
            </Text>
        </View>
    );
};




const styles = StyleSheet.create({
    
    logoContainer: {
        marginBottom:15
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    h1: {
      fontSize:25,
      fontWeight:"600",
      marginBottom:20

    },
    input: {
      width: "70%",
      paddingVertical:5,
      paddingHorizontal:10,
      borderWidth: 1,
      borderRadius:20,
      marginBottom:20
    },
    error: {
        color:"red",
        marginBottom:20
    },
    errorEmty: {
        color:"red",
    },
    button: {
      borderWidth: 0,
      paddingVertical:10,
      paddingHorizontal:20,
      borderRadius:20,
      marginBottom:20,
      backgroundColor:"#17aaff",
      color:"white"
    },
});
  
export default AuthScreen