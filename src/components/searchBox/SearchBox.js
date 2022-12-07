import React from "react";
import {StyleSheet, Text, TextInput, View} from 'react-native';
import styles from "./style";

const SearchBox = () => {
       return(
         <View style={styles.search_container}>
             <TextInput style={styles.search_text} placeholder='Ara...'/>
         </View>
       );
}

export default SearchBox;
