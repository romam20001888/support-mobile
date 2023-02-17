import * as React from 'react';
import {StyleSheet,ScrollView,TextInput,Text} from 'react-native';

const Personal = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <TextInput
                style={styles.inputText} 
                placeholder='Имя'
            />
            <TextInput
                style={styles.inputText} 
                placeholder='Фамилия'
            />
            <TextInput
                style={styles.inputText} 
                placeholder='Отчество'
            />
            <TextInput
                style={styles.inputText} 
                placeholder='E-Mail'
            />
            <TextInput
                style={styles.inputText} 
                placeholder='Логин (мин. 3 символа)'
            />
            <TextInput
                style={styles.inputText} 
                placeholder='Новый пароль'
            />
            <TextInput
                style={styles.inputText} 
                placeholder='Подтверждение нового пароля'
            />
        </ScrollView>
    );
};




const styles = StyleSheet.create({
    
    container: {
        width:"100%",
        padding:10,
        backgroundColor: '#fff'
    },
    inputText:{
        paddingVertical:5,
        paddingHorizontal:10,
        borderWidth: 1,
        borderRadius:20,
        marginBottom:20,
        width:"100%"
    },
});
  
export default Personal