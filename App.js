import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBox from './src/components/searchBox/SearchBox';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.app_title_container}>
          <Text style={styles.app_title_text}>
            STORE APP
          </Text>
      </View>
        <SearchBox />


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
