import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import orders from '../../../assets/data/orders.json';
import { Entypo } from "@expo/vector-icons";



const OrderItem = ({order}) => {
  return (
    
    <View style={styles.foodBox}>  
      <Image source={{uri: order.Restaurant.image}} style={styles.image} /> 
      <View style={{marginLeft:8, flex:1, paddingVertical:5}}>
      <Text style={{fontSize:16, fontWeight:'500'}}>{order.Restaurant.name}</Text>
      <Text style={{color:'grey'}}>{order.Restaurant.address}</Text>
      <Text style={{marginTop:10}}>Delivery details</Text>
      <Text style={{color:'grey'}}>{order.User.name}</Text>
      <Text style={{color:'grey'}}>{order.User.address}</Text>
      </View>
      <View style={styles.icon}>
      <Entypo name="check" size={30} color='white'  style={{marginLeft:'auto'}}/>
      </View>
     
    </View>
   
  );
}

export default OrderItem;

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
