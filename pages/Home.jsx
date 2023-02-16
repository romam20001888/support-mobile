import * as React from 'react';
import { StyleSheet,FlatList,View,Text,Image,TouchableOpacity } from 'react-native';

const Item = ({value,navigation}) => {
    
    const [statusItem, onChangeStatusItem] = React.useState(false);
    return (
        <>
            <TouchableOpacity 
                style={statusItem?styles.itemOpen:styles.item}
                onPress={() =>{
                    onChangeStatusItem(!statusItem)
                }} 
            >
                <Text 
                    numberOfLines={2} 
                    style={styles.title}
                >
                    {value.title}
                </Text>
            </TouchableOpacity>
            <View style={statusItem?styles.itemInfoOpen:styles.itemInfoClosed}>
                <View style={styles.itemNavPanel}>
                    <TouchableOpacity 
                        style={styles.itemNavPanelInfo}
                        onPress={() =>{ 
                            navigation.navigate('DetailTiketScreen', {id: value.id})
                        }}
                    >
                        <Image 
                            style={styles.itemNavPanelIcon}
                            source={require('../images/free-icon-information.png')}
                        />
                    </TouchableOpacity>
                    {value?.dateStart?
                        <TouchableOpacity style={styles.itemNavPanelStop}>
                            <Image 
                                style={styles.itemNavPanelIcon}
                                source={require('../images/pause.png')}
                            />
                        </TouchableOpacity>
                    :
                        <TouchableOpacity style={styles.itemNavPanelStart}>
                            <Image 
                                style={styles.itemNavPanelIcon}
                                source={require('../images/free-icon-play-button.png')}
                            />
                        </TouchableOpacity>
                    }

                </View>
                
                {value?.dateStart? <Text style={styles.itemInfoDescriptionTitle}>Время выполнения: 00:27</Text>:<></>}
                <Text style={styles.itemInfoDescriptionTitle}>Приоритетность задачи: {value.prioritet}</Text>
                <Text style={styles.itemInfoDescriptionTitle}>Описание задачи:</Text>
                <Text numberOfLines={4} style={styles.itemInfoDescription}>{value.description}</Text>
            </View>
        </>
    )
};
const HomeScreen = ({navigation}) => {
    
    const [tiketList, onChangeTiketList] = React.useState([]);

    
    React.useEffect(async ()=>{
        onChangeTiketList([
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              prioritet: 'Важная',
              title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
              description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              prioritet: 'Авария',
              dateStart: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
              description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              prioritet: 'Важная',
              title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
              description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d73',
              prioritet: 'Важная',
              title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
              description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d74',
              prioritet: 'Важная',
              title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
              description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d75',
              prioritet: 'Важная',
              title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
              description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d76',
              prioritet: 'Важная',
              title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
              description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d77',
              prioritet: 'Важная',
              title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
              description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d78',
              prioritet: 'Важная',
              title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
              description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d79',
              prioritet: 'Важная',
              title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
              description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d80',
              prioritet: 'Средняя',
              title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
              description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d81',
              prioritet: 'Средняя',
              title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
              description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
            },
          ])
    },[])

    return (
        <>
            <FlatList
                data={tiketList}
                renderItem={({item}) => <Item value={item} navigation={navigation} />}
                keyExtractor={item => item.id}
                style={styles.containerFlatList}
            />
            
            <TouchableOpacity 
                onPress={() =>{
                    navigation.navigate('AddTiketScreen')
                }}
                style={styles.containerAddTiket}
            >
                <Text style={styles.containerAddTiketText}>Добавить задачу</Text>
            </TouchableOpacity>
        </>
    );
};
const styles = StyleSheet.create({
    
    itemInfoDescription: {
        color: "white",
    },
    itemInfoDescriptionTitle: {
        color: "white",
        fontSize:18,
        paddingBottom:8
    },
    
    itemNavPanelIcon: {
        width: 30,
        height: 30,
    },
    itemNavPanel: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row"
    },
    itemNavPanelInfo: {
        flex:1,
        paddingVertical:10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row"
    },
    itemNavPanelStart: {
        flex:1,
        paddingVertical:10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row"
    },
    itemNavPanelStop: {
        flex:1,
        paddingVertical:10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row"
    },
    itemNavPanel: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row"
    },
    itemInfoOpen: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor:"#404040",
        display:"flex"
    },
    itemInfoClosed: {
        display:"none"
    },
    container: {
        flex: 1,
    },
    containerFlatList: {
        marginBottom: 60,
    },
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
    item: {
        backgroundColor: '#f7f7f7',
        padding: 20,
        marginVertical: 2,
    },
    itemOpen: {
        backgroundColor: '#dbdbdb',
        padding: 20,
        marginVertical: 2,
    },
    
    title: {
        fontSize: 18,
    },
});
export default HomeScreen