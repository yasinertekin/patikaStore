import { StyleSheet ,Dimensions, Text,} from "react-native/";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',        
    },
    container_style:{
        paddingTop:10,
        paddingRight:10,
        paddingLeft:10,
        margin:10,
        borderRadius:10,
        backgroundColor:'#e0e0e0',
    },


    title:{
        fontWeight:'bold',
        color:'black',
        fontSize:20,
    },
    image_stil:{
        height:Dimensions.get('window').height / 3,
        borderRadius:10,
        resizeMode:'contain'
    },
    stock_info:{
        color:'red',
        fontSize:15,
        fontWeight:'bold'
    },

    price:{
        marginLeft:5,
        fontSize:18,
    }
})