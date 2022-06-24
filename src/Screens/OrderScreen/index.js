import { View, Text, FlatList, Dimensions, useWindowDimensions } from 'react-native';
import { useRef, useMemo } from "react";
import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import orders from '../../../assets/data/orders.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import OrderItem from '../../components/OrderItem';
import MapView, { Marker } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import OrderDelivery from '../OrderDelivery';


const OrderScreen = () => {
  const bottomSheetRef = useRef(null);
  const { width, height } = useWindowDimensions();

  const snapPoints = useMemo(() => ["20%", "95%"], [])


  return (
    <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MapView
          style={{
            height,
            width
          }}
          showsUserLocation followsUserLocation
        >
          {orders.map((order) => (
            <Marker
            key={order.id}
              title={order.Restaurant.name} 
              description={order.Restaurant.address} coordinate={{
                latitude: order.Restaurant.lat,
                longitude: order.Restaurant.lng
              }}>
              <Entypo name="shop" size={24} color="green" />
            </Marker>
          ))}
        </MapView>
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


