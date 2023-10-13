import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';

export default function App() {
    return ( 
        <View style = { styles.container } >
            <View style={styles.view1}>
                <Image
                      style={[styles.img1, styles.imgLayout]}
                      contentFit="cover"
                      source={require("./assets/vs_blue.png")}
                />
               <Text style={styles.text1}>Dien thoai Vsmart Joy 3 -Hang chinh hang</Text>
               <View style={styles.viewin}>
                <Image style={styles.star} source={require('./assets/star.png')}></Image>
                <Image style={styles.star} source={require('./assets/star.png')}></Image>
                <Image style={styles.star} source={require('./assets/star.png')}></Image>
                <Image style={styles.star} source={require('./assets/star.png')}></Image>
                <Image style={styles.star} source={require('./assets/star.png')}></Image>
                <Text>          (Xem 828 danh gia)</Text>
               </View>
               <View style={styles.viewin2}>
                    <Text>1.790.000d</Text>
                    <Text style={styles.text2}> &nbsp; &nbsp; 1.790.000d</Text>
               </View>
               <View style={styles.viewin3}>
                   <Text style={styles.text3}>O DAU RE HON HOAN TIEN </Text>
                   <Image style={styles.img2} source={require('./assets/Group 1.png')}></Image>
               </View>
               <TouchableOpacity>
                   <Text style={styles.text4}>4 MAU-CHON MAU</Text>
               </TouchableOpacity>
               
            </View>
            <View style={styles.view2}>
                <TouchableOpacity>
                    <Text style={styles.text5}>CHON MUA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view1:{
        flex:3,
        height:'50%',
        width:'100%',
    },
    img1:{
        height:'70%',
        width:'90%',
    },
    imgLayout:{
        justifyContent:'center',
        alignItems:'center',
    },
    text1:{
        fontSize:20,
        fontWeight:600,
    },
    viewin:{
        flexDirection:'row'
    },
    star:{
        height:20,
        width:20,    
    },
    viewin2:{
        flexDirection:'row',
    },
    text2:{
        textDecorationLine:'line-through'
        
    },
    viewin3:{
        flexDirection:'row'
    },
    text3:{
        color:'red',
        fontWeight:700
    },
    img2:{
        height:20,
        width:20
    },
    text4:{
        marginTop:'30px',
        borderWidth:'1px',
        borderRadius:'5px',
        height:40,
        paddingTop:'10px',
        fontFamily:'Roboto',
        fontSize:'15px',
        fontWeight:400,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        borderColor:'#00000075'
    },
    view2:{
        height:'20%',
        flex:1,
        width:'100%'
    },
    text5:{
        height:50,
        border:'1px',
        backgroundColor:'#EE0A0A',
        borderRadius:'10px',
        textAlign:'center',
        color:'white',
        fontSize:20,
        fontWeight:700,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'10px'


    }
});