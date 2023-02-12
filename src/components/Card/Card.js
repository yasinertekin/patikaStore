import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./Card.Style";

const NewCard = ({ news }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container_style}>

            <Image style={styles.image_stil} source={{ uri: news.imgURL }}></Image>
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.price}>{news.price}</Text>

        {news.inStock == false ? (

            <Text style={styles.stock_info}>STOKTA YOK</Text>
        ):
        (<Text></Text>)}


            </View>


        </View>
    )
}


export default NewCard;