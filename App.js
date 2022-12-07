import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import {useState} from "react";
import SearchBox from './src/components/searchBox/SearchBox';
import products from './products.json';

import Products from "./src/components/products/Products";

export default function App() {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    const renderItem = ({ item }) => (
        <Products item={item} />
    );
  return (
    <View style={styles.container}>
        <View style={styles.app_title_container}>
            <Text style={styles.app_title_text}>
                STORE APP
            </Text>
        </View>
        <SearchBox />

        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      margin:25,
  },
    app_title_container:{
      marginTop: 35,
      padding:12,
      alignItems: 'center',
  },
    app_title_text:{
        fontSize: 35,
        color: 'purple',
        fontWeight: "bold"
    }

});
