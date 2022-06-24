import { StyleSheet } from 'react-native';
const styles = StyleSheet.create ({
    RestaurantName: {
         fontSize: 25, 
         letterSpacing: 1, 
         paddingVertical: 10 
    },
    buttonText: {
        color:"white", 
        paddingVertical:10, 
        fontSize:25, 
        fontWeight:'500', 
        textAlign:'center'
    },
    button : {
        backgroundColor:"#3FC060", 
        marginTop:'auto', 
        marginVertical:60, 
        marginHorizontal:10, 
        borderRadius:10
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
});

export default styles;