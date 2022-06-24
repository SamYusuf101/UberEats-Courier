import { View, Text, FlatList, Dimensions } from 'react-native';
import { useRef, useMemo } from "react";
import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import orders from '../../../assets/data/orders.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import OrderItem from '../../components/OrderItem';
import MapView from "react-native-maps";



const OrderScreen = () => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["20%", "1 5%"], [])


  return (
    <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <MapView style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width }} />
        <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints} >
          <View style={{ alignItems: 'center', marginBottom: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: "600", letterSpacing: 0.5 }}>You're Online</Text>
            <Text style={{ letterSpacing: 0.5, color: "grey" }}>Available Orders: {orders.length}</Text>
          </View>
          <FlatList
            data={orders}
            renderItem={({ item }) => <OrderItem order={item} />}
          />
        </BottomSheet>
      </GestureHandlerRootView>

    </View>
  )
}

export default OrderScreen


