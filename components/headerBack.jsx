import * as React from 'react';
import { StyleSheet,TouchableOpacity,Image } from 'react-native';


const HeaderBack = ({navigation , pageBack}) => {
    return (
      <>
        <TouchableOpacity 
            onPress={() =>{
                navigation.navigate(pageBack)
            }}
            style={styles.containerMenuOpen}
        >
            <Image 
                style={styles.iconFilter}
                source={require('../images/free-icon-back.png')}
            />
        </TouchableOpacity>
      </>
    );
};


const styles = StyleSheet.create({
    iconFilter: {
        width: 30,
        height: 30,
    },
    containerMenuOpen: {
        fontSize:45,
        marginRight:20
    },
});
export default HeaderBack