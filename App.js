import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList, SafeAreaView} from 'react-native';
import orders from './assets/data/orders.json';
import OrderItem from './src/components/OrderItem';

export default function App() {
  return (
    <View style={styles.container}>
   <FlatList
   data={orders}
   renderItem={({item}) => <OrderItem order={item} />}
   />
   <StatusBar style="auto" />
    </View>
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
