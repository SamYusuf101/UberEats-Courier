import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import orders from './assets/data/orders.json';
import { Entypo } from "@expo/vector-icons";

const order = orders[0];

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.foodBox}>  
      <Image source={{uri: order.Restaurant.image}} style={styles.image} /> 
      <View style={{marginLeft:10}}>
      <Text>{order.Restaurant.name}</Text>
      <Text>{order.Restaurant.address}</Text>
      <Text>Delivery details</Text>
      <Text>{order.User.name}</Text>
      <Text>{order.User.address}</Text>
      </View>
      
      <Entypo name="check" size={30} color='green'  style={{marginLeft:'auto'}}/>
      
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  foodBox: {
    flexDirection:'row', 
    margin:10, 
    borderColor:'green', 
    borderWidth:2, 
    borderRadius:10
  },
  image: {
    width:'25%', 
    height:'100%', 
    borderRadius:10
  }
});
