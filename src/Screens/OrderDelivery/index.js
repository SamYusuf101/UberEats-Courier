import { View, Text, StyleSheet } from 'react-native';
import { useRef, useMemo } from 'react';
import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import orders from '../../../assets/data/orders.json';

const order = orders[0];

const OrderDelivery = () => {

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["10%", "80%"], [])
    const margin = {
        marginTop:10
    }

    return (

        <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
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
            </BottomSheet>
        </View>

    )
};

export default OrderDelivery;

const styles = StyleSheet.create ({
    RestaurantName: {
         fontSize: 25, 
         letterSpacing: 1, 
         paddingVertical: 10 
    },
    orderTitle: {
        
        marginBottom:5, 
        fontSize:18, 
        color:'grey'
    },
    margin: {
        marginTop:10
    },
    ShoppingIcon: { 
        marginTop: 10, 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center" 
    },
    RestaurantAddress: { 
        fontSize: 25, 
        fontWeight: '500', 
        color: 'grey', 
        marginLeft: 15, 
        textAlign:'center' 
    },
    UserAddress: { 
        fontSize: 20, 
        fontWeight: '500', 
        color: 'grey', 
        marginLeft: 15,
        textAlign:'center'
    }
})