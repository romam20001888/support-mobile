import * as React from 'react';
import {StyleSheet,TouchableOpacity,TextInput,Text,ScrollView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { AddTask } from '../functions/task';

const AddTiket = ({navigation}) => {
    const countries = ["Привязать к проекту","Egypt", "Canada", "Australia", "Ireland"]
    const critical = ["Критичность", "Средняя", "Высокая", "Авария"]
    const category = ["Категория", "Общие вопросы", "Работа по дизайну", "Работа по программированию", "Работа по наполнению", "Ошибки"]
    
    const [taskError, onChangeTaskError] = React.useState("");
    const [taskName, onChangeTaskName] = React.useState("");
    const [taskDescription, onChangeTaskDescription] = React.useState("");
    const [taskProject, onChangeTaskProject] = React.useState(false);
    const [taskCritikal, onChangeTaskCritikal] = React.useState(false);
    const [taskCategory, onChangeTaskCategory] = React.useState(false);
    return (
        <>
            <ScrollView style={styles.container}>
                <TextInput
                    style={styles.inputText} 
                    onChangeText={onChangeTaskName}
                    placeholder='Название задачи'
                />
                <TextInput
                    multiline={true}
                    style={styles.inputText}
                    onChangeText={onChangeTaskDescription}
                    numberOfLines={4}
                    placeholder='Описание задачи'
                />
                <SelectDropdown
                    buttonStyle={styles.inputTextSelect}
                    buttonTextStyle={styles.inputTextSelectText}
                    data={countries}
                    onSelect={(selectedItem, index) => {
                        onChangeTaskProject(index)
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
                        onChangeTaskCritikal(index)
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
                        onChangeTaskCategory(index)
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
            
            <Text style={styles.containerError}>{taskError}</Text>
            <TouchableOpacity 
                onPress={async () =>{
                    onChangeTaskError("")
                    if(taskName==""){
                        onChangeTaskError("Введите название");
                        return;
                    }
                    if(taskDescription==""){
                        onChangeTaskError("Введите описание");
                        return;
                    }
                    if(taskProject==false){
                        onChangeTaskError("Выберите проект");
                        return;
                    }
                    if(taskCritikal==false){
                        onChangeTaskError("Выберите критичность");
                        return;
                    }
                    if(taskCategory==false){
                        onChangeTaskError("Выберите категорию");
                        return;
                    }
                    let data = {
                        "Name":taskName,
                        "Description":taskDescription,
                        "Project":taskProject,
                        "Critikal":taskCritikal,
                        "Category":taskCategory,
                    };
                    let taskID = await AddTask(data);
                    navigation.navigate('DetailTiketScreen', {id: taskID});
                }}
                style={styles.containerAddTiket}
            >
                <Text style={styles.containerAddTiketText}>Добавить задачу</Text>
            </TouchableOpacity>
        </>
    );
};




const styles = StyleSheet.create({
    containerAddTiketText: {
        fontSize:20,
        padding:0,
        margin:0,
        color:"white"
    },
    containerAddTiket: {
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
    containerError:{
        color:"red",
        marginBottom:50,
        backgroundColor: '#fff',
        textAlign:"center"
    },
    container: {
        width:"100%",
        padding:10,
        backgroundColor: '#fff'
    },
});
  
export default AddTiket