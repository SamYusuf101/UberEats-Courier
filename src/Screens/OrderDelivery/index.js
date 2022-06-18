import { View, Text } from 'react-native';
import { useRef, useMemo } from 'react';
import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FontAwesome5 } from "@expo/vector-icons";
import orders from '../../../assets/data/orders.json';

const order = orders[0];

const OrderDelivery = () => {

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["10%", "80%"], [])

    return (

        <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
            <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}
                handleIndicatorStyle={{ backgroundColor: 'red', width: 100 }} >
                <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 25, letterSpacing: 1 }}>14mins</Text>
                    <FontAwesome5 name="shopping-bag" size={30} color='#3FC060' style={{ marginHorizontal: 10 }} />
                    <Text style={{ fontSize: 25, letterSpacing: 1 }}>5 km</Text>
                </View>
                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: 25, letterSpacing: 1, paddingVertical: 10 }}>{order.Restaurant.name}</Text>
                    <Text style={{ fontSize: 25, fontWeight: '500', color: 'grey' }}>{order.Restaurant.address}</Text>
                    <Text>{order.User.address}</Text>
                    <View style={{borderTopWidth:1, borderColor:'lightgrey'}}>
                        <Text>Burger x1</Text>
                        <Text>Onion Rings</Text>
                        <Text>Pizza</Text>
                        <Text>Shawarma</Text>
                    </View>
                </View>
            </BottomSheet>
        </View>

    )
}

export default OrderDelivery