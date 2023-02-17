import * as React from 'react';
import {StyleSheet,ScrollView,TextInput,Text,TouchableOpacity} from 'react-native';

const Personal = ({navigation}) => {
    const [taskError, onChangeTaskError] = React.useState("");
    return (
        <>
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
            <Text style={styles.containerError}>{taskError}</Text>
            <TouchableOpacity 
                onPress={async () =>{
                   
                }}
                style={styles.containerSaveUser}
            >
                <Text style={styles.containerSaveUserText}>Сохранить</Text>
            </TouchableOpacity>
        </>
    );
};




const styles = StyleSheet.create({
    containerError:{
        color:"red",
        marginBottom:50,
        backgroundColor: '#fff',
        textAlign:"center"
    },
    containerSaveUserText: {
        fontSize:20,
        padding:0,
        margin:0,
        color:"white"
    },
    containerSaveUser: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position:"absolute",
        bottom:0,
        width:"100%",
        height:50,
        paddingBottom:5,
        backgroundColor:"#17aaff",
        right:0
    },
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