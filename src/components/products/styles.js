import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    product_container:{
        flex:1,
        marginTop:22,
        backgroundColor: '#ddd',
        borderRadius: 8,
        alignItems: "center",
    },
    product_image_container:{
      padding: 12,
        margin:12,
    },
    product_image:{
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width / 3,
        padding: 12,
        borderRadius: 5
    },
    title_text:{
        fontSize: 22,
        fontWeight: "bold",
        padding: 12
    },
    price_text:{
        color: 'gray',
        fontWeight: "bold",
        fontSize: 18,
        padding: 8
    },
    inStock_text:{
        color: 'red',
        fontSize: 25,
        fontWeight: "bold",
        padding: 8
    },
    stock_text:{
        color: '#445588',
        fontWeight: "bold",
        alignSelf: "flex-end",
        padding: 8,
        fontSize: 18
    }
})

export default styles;