import React from "react";
import {View ,Text, Image} from "react-native";
import styles from "./styles";

const Products = ({item}) => {
    if(item.inStock){
        return(
            <View style={styles.product_container}>
                <View style={styles.product_image_container}>
                    <Image style={styles.product_image} source={{uri: item.imgURL}}/>
                </View>
                <Text style={styles.title_text}>
                    {item.title}
                </Text>
                <Text style={styles.price_text}>
                    {item.price}
                </Text>
                <Text style={styles.stock_text}>
                    {item.stock} Adet
                </Text>

            </View>
        );
    }else {
        return(
            <View style={styles.product_container}>
                <View style={styles.product_image_container}>
                    <Image style={styles.product_image} source={{uri: item.imgURL}}/>
                </View>
                <Text style={styles.title_text}>
                    {item.title}
                </Text>
                <Text style={styles.price_text}>
                    {item.price}
                </Text>
                <Text style={styles.inStock_text}>
                    STOKTA YOK !
                </Text>
            </View>
        );
    }
}

export default Products;