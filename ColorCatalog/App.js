import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Alert  } from 'react-native';
import * as Progress from 'react-native-progress';

export default function App() {
  const handlePress=()=>{
    console.log(`Hello! Time now is ${new Date().toLocaleTimeString()}`);
    Alert.alert(`Hello! Time now is ${new Date().toLocaleTimeString()}`)
  }
  return (
    <View style={styles.container}>
      <Progress.Bar progress={0.3} width={200} />
      <ActivityIndicator size="large" color="#fff"/>
      <Text style={styles.heading}>Hello World!</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Say Hello!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  heading:{
    fontSize:28,
    fontWeight:"700"
  },  
  container: {
    flex: 1,
    backgroundColor: '#fe1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginTop:50,
    borderRadius:10,
    padding:10,
    backgroundColor: 'crimson',
    textColor: 'white',
    width:120,
  },
  buttonText:{
    color:'white',
    fontSize:20,
    alignSelf:'center',
    fontWeight:'500'
  }
});