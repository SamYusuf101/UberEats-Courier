import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList, SafeAreaView} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from './src/navigation';


export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}> 
     <Navigation />
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    top: 50
  },
  foodBox: {
    flexDirection:'row', 
    margin:10, 
    borderColor:'green', 
    borderWidth:2, 
    borderRadius:12
  },
  image: {
    width:'25%', 
    height:'100%', 
    borderBottomLeftRadius:10, 
    borderTopLeftRadius:10
  },
  icon: {
    backgroundColor:'#3fc060', 
    borderBottomRightRadius:10, 
    borderTopRightRadius:10, 
    alignItems:'center', 
    justifyContent:'center',
    padding:5
  }

});
