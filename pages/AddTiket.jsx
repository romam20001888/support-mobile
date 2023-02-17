import * as React from 'react';
import {StyleSheet,View,TextInput,Text,ScrollView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

const AddTiket = ({navigation}) => {
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const critical = ["Средняя", "Высокая", "Авария"]
    const category = ["Общие вопросы", "Работа по дизайну", "Работа по программированию", "Работа по наполнению", "Ошибки"]
    
    return (
        <ScrollView style={styles.container}>
            <TextInput
                style={styles.inputText} 
                placeholder='Название задачи'
            />
            <View style={styles.containerTextTextarea} >
                <Text>Nen будет поле описапния</Text>
            </View>
            <SelectDropdown
                buttonStyle={styles.inputTextSelect}
                buttonTextStyle={styles.inputTextSelectText}
                data={countries}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                defaultButtonText="Привязать к проекту"
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />
            <SelectDropdown
                buttonStyle={styles.inputTextSelect}
                buttonTextStyle={styles.inputTextSelectText}
                data={critical}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                defaultButtonText="Критичность"
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />
            <SelectDropdown
                buttonStyle={styles.inputTextSelect}
                buttonTextStyle={styles.inputTextSelectText}
                data={category}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                defaultButtonText="Категория"
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />
        </ScrollView>
    );
};




const styles = StyleSheet.create({
    inputText:{
        paddingVertical:5,
        paddingHorizontal:10,
        borderWidth: 1,
        borderRadius:20,
        marginBottom:20,
        width:"100%"
    },
    containerTextTextarea:{
        marginBottom:20,
        width:"100%",
    },
    inputTextTextarea:{
        width:"100%",
    },
    inputTextSelect:{
        height:"auto",
        paddingVertical:5,
        paddingHorizontal:10,
        borderWidth: 1,
        borderRadius:20,
        marginBottom:20,
        backgroundColor:"#17aaff",
        color:"white",
        width:"100%"
    },
    inputTextSelectText:{
        color:"white",
    },
    
    container: {
        width:"100%",
        padding:10,
        backgroundColor: '#fff',
    },
});
  
export default AddTiket