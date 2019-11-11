import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        
      </View>
      
      <View style={styles.blueView}>
      
      </View>      
     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: { // 컨테이너는 아빠다 (이게 사라지면 밑에는 작동안함 flex:1로 인해 모든공간을 사용하도록함)
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center'
  },
  yellowView: {
    flex: 1,
    backgroundColor:"yellow"
  },
  blueView: {
    flex: 5,
    backgroundColor:"blue"
  }
  
});
