import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import Screen01 from './Screen01';
import Screen02 from './Screen02';

const App = () => {
    return ( 
        <View style = { styles.container } >
          <NavigationContainer>
            <Stack.Navigator intialRouteName="Screen01">
              <Stack.Screen name="Screen01" component={Screen01} />
              <Stack.Screen name="Screen02" component={Screen02} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
})
export default App;