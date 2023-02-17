import {AsyncStorage} from 'react-native';


const getMessageList = async () =>{ // фунция получения списка задач
    try {
        const token = await AsyncStorage.getItem('@PushrToken')
        let dataFetch = await fetch('https://8544.vps.asko.run/push/get_list.php',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token:token
            })
        })
        let json = await dataFetch.json();
        return json;
    } catch (error) {
        return []
    }
}

const sendTokenInServer = async (Token) =>{ // фунция получения списка задач
    try {
        AsyncStorage.setItem('@PushrToken',Token)
        let dataFetch = await fetch('https://8544.vps.asko.run/push/register_push.php',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token:Token
            })
        })
        let json = await dataFetch.json();
        return json;
    } catch (error) {
        return []
    }
}


module.exports = Object.freeze({
    getMessageList: getMessageList,
    sendTokenInServer: sendTokenInServer,
});