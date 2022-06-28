import { View, Text, StyleSheet, useWindowDimensions, ActivityIndicator } from 'react-native';
import { useRef, useMemo, useEffect, useState } from 'react';
import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import orders from '../../../assets/data/orders.json';
import styles from '../OrderDelivery/styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";



const order = orders[0];

const OrderDelivery = () => {

    const [driverLocation, setDriverLocation] = useState(null);

    const { width, height } = useWindowDimensions();

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["20%", "90%"], []);

    useEffect(() => {
      const getDeliveryLocations = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (!status === 'granted') {
            console.log('Oh no')
            return;
        }
        let location = await Location.getCurrentPositionAsync();
        setDriverLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        });
      }
      getDeliveryLocations();
    }, [])
    
    const margin = {
        marginTop:10
    }
   
    if(!driverLocation){
        return <ActivityIndicator size={"large"} />
    }

    return (

        <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
        <MapView
         style={{
            width, height
        }}
        showsUserLocation 
        followsUserLocation
        initialRegion={{
            latitude: driverLocation.latitude,
            longitude: driverLocation.longitude,
            latitudeDelta:0.07,
            longitudeDelta:0.07
            
        }}
        
        />
            <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}
                handleIndicatorStyle={{ backgroundColor: 'red', width: 100 }} >
                <View style={styles.ShoppingIcon}>
                    <Text style={{ fontSize: 25, letterSpacing: 1 }}>14mins</Text>
                    <FontAwesome5 name="shopping-bag" size={30} color='#3FC060' style={{ marginHorizontal: 10 }} />
                    <Text style={{ fontSize: 25, letterSpacing: 1 }}>5 km</Text>
                </View>
                <View style={{ margin: 20 }}>
                    <Text style={styles.RestaurantName}>
                    {order.Restaurant.name}
                    </Text>
                    <View style={{ flexDirection: 'row', marginBottom:10 }}>
                        <Fontisto name="shopping-store" size={24} color="grey" />
                        <Text style={styles.RestaurantAddress}>
                            {order.Restaurant.address}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom:10 }}>
                        <FontAwesome5 name="map-marker-alt" size={30} color='grey' />
                        <Text style={styles.UserAddress}>
                            {order.User.address}
                        </Text>
                    </View>
                    <View style={{ borderTopWidth: 1, borderColor: 'lightgrey',}}>
                        <Text style={[styles.orderTitle, styles.margin] }>Burger x1</Text>
                        <Text style={styles.orderTitle}>Onion Rings</Text>
                        <Text style={styles.orderTitle}>Pizza</Text>
                        <Text style={styles.orderTitle}>Shawarma</Text>
                    </View>
                </View>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Accept Order</Text>
                </View>
            </BottomSheet>
            </GestureHandlerRootView>
        </View>

    )
};

export default OrderDelivery;

