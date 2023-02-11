import * as React from 'react';
import { Pressable,Modal,ScrollView,StyleSheet,Text,Image,View } from 'react-native';
import {AsyncStorage} from 'react-native';


const HeaderMenu = ({navigation}) => {
    const [statusMenu, onChangeStatusMenu] = React.useState(false);
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
                    <Text style={styles.containerMenuTitleText}>Меню</Text>
                    <Pressable
                        onPress={() => onChangeStatusMenu(!statusMenu)}
                    >
                        <Text style={styles.containerMenuTitleClose}>╳</Text>
                    </Pressable>
                </View>
                <View style={styles.containerMenuContainer}>
                    <ScrollView>
                        <Text 
                            style={styles.containerMenuItem}
                            onPress={() =>{ 
                                onChangeStatusMenu(!statusMenu)
                                navigation.navigate('HomeScreen')
                            }}
                        >
                            Список задач
                        </Text>
                        <Text 
                            style={styles.containerMenuItem}
                            onPress={() =>{ 
                                onChangeStatusMenu(!statusMenu)
                                navigation.navigate('HomeScreen')
                            }}
                        >
                            Список задач
                        </Text>
                        <Text 
                            style={styles.containerMenuItemExit}
                            onPress={() =>{
                                onChangeStatusMenu(!statusMenu)
                                AsyncStorage.removeItem('@UserToken')
                                navigation.navigate('AuthScreen')
                            }}
                        >
                            Выход
                        </Text>
                    </ScrollView>
                </View>
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
                source={require('../images/free-icon-menu.png')}
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
    containerMenuContainer: {
        flex:1,
        width:"100%"
    },
    containerMenuItem: {
        fontSize:18,
        marginLeft:10,
        marginBottom:10
    },
    containerMenuItemExit: {
        fontSize:18,
        marginTop:30,
        marginLeft:10
    },
    containerMenuOpen: {
        fontSize:45,
        marginRight:20
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
export default HeaderMenu