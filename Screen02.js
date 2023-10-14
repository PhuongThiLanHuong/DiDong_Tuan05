import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Screen02() {
    return ( 
        <View style = { styles.container } >
          <View style={styles.view1}>
            <Image style={styles.img1} source={require('./assets/vs_blue.png')}></Image>
            <Text style={styles.text1}>Dien thoai Vsmart Joy 3 -Hang chinh hang</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text2}>Chon 1 mau ben duoi :</Text>
            <Image style={styles.img2} source={require('./assets/Rectangle 4.png')}></Image> 
            <Image style={styles.img2} source={require('./assets/Rectangle 5.png')}></Image>  
            <Image style={styles.img2} source={require('./assets/Rectangle 6.png')}></Image>  
            <Image style={styles.img2} source={require('./assets/Rectangle 7.png')}></Image>  
            <TouchableOpacity>
                <Text style={styles.text3}>XONG</Text>
            </TouchableOpacity> 
          </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      height:'100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    view1:{
        height:'150px',
        width:'322px',
        flexDirection:'row',
        backgroundColor:'white',
    },
    img1:{
       height:'132px',
       width:'112px',
       marginLeft:'4px',
    },
    text1:{
        fontSize:15,
    },
    view2:{
        height:'491px',
        width:'360px',
        backgroundColor:'#C4C4C4',
        marginTop:'10px',
        alignItems:'center',
    },
    text2:{
        fontSize:15,
        marginLeft:'10px',
        marginTop:'10px',
    },
    img2:{
        height:'85px',
        width:'80px',
        marginLeft:'13px',
        marginTop:'20px',
    },
    text3:{
        fontSize:15,
        marginTop:'10px',
        backgroundColor:'#2F80ED',
        color:'white',
        height:'30px',
        width:'326px',
        textAlign:'center',
        paddingTop:'5px',
        borderRadius:'10px',
    },
});
