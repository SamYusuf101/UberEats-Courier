import { View, Text } from 'react-native';
import { useRef, useMemo } from 'react';
import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';


const OrderDelivery = () => {
    
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["20%", "95%"], [])

  return (
    <View>
    <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints} >
    </BottomSheet>
    </View>
  )
}

export default OrderDelivery