import * as React from 'react';
import { Pressable,Modal,FlatList,StyleSheet,Text,Image,View } from 'react-native';
import { getMessageList } from '../functions/notification';

const Item = ({message}) => {
    return (
        <View style={styles.messageContainer}>
            <Text style={styles.messageContainerTitle}>{message.title}</Text>
            <Text style={styles.messageContainerText}>{message.body}</Text>
        </View>
    )
};

const HeaderMessage = ({navigation}) => {
    const [statusMenu, onChangeStatusMenu] = React.useState(false);
    const [messageList, onChangeMessageList] = React.useState([]);


    React.useEffect(()=>{
        async function fetchData() {
            onChangeMessageList(await getMessageList())
        }
        fetchData();
    },[])
    
    return (
      <>
        
        <Modal
            animationType="slide"
            transparent={true}
            visible={statusMenu}
            onRequestClose={() => {
                onChangeStatusMenu(!statusMenu);
            }}
        >
            <View style={styles.containerMenu}>
                <View style={styles.containerMenuTitle}>
                    <Text style={styles.containerMenuTitleText}>Уведомления</Text>
                    <Pressable
                        onPress={() => onChangeStatusMenu(!statusMenu)}
                    >
                        <Text style={styles.containerMenuTitleClose}>╳</Text>
                    </Pressable>
                </View>
                <FlatList
                    data={messageList}
                    renderItem={({item}) => <Item message={item} />}
                    keyExtractor={item => item.id}
                    style={styles.containerMenuContainer}
                />
            </View>
        </Modal>
        <Text
            onPress={() =>{
                onChangeStatusMenu(!statusMenu)
            }}
            style={styles.containerMenuOpen}
        >
            <Image 
            
                style={styles.iconFilter}
                source={require('../images/free-icon-notification-bell.png')}
            />
        </Text>
      </>
    );
};


const styles = StyleSheet.create({
    iconFilter: {
        width: 30,
        height: 30,
    },
    messageContainerTitle:{
        fontSize:20,
    },
    messageContainer:{
        marginHorizontal:10,
        marginVertical:5,
        backgroundColor:"#f7f7f7",
        paddingHorizontal:10,
        paddingVertical:5
    },
    containerMenuOpen: {
        fontSize:35,
        marginLeft:10
    },
    containerMenuContainer: {
        flex:1,
        width:"100%"
    },
    containerMenuItem: {
        fontSize:18,
        marginLeft:10,
        marginBottom:10
    },
    containerMenuTitleClose: {
        fontSize:23,
        marginRight:10
    },
    containerMenuTitleText: {
        fontSize:23,
        marginLeft:10
    },
    containerMenu: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent:"flex-start",
        height:"100%",
        width:"100%",
        backgroundColor:"#fff"
    },
    containerMenuTitle: {
        flex: 0.05,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        height:"100%",
        width:"100%",
        marginBottom:10,
        backgroundColor:"#fff"
    },
});
export default HeaderMessage