import { StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
import { useState } from 'react';
import { Buttom } from './src/components/Buttom'
import { Display } from './src/components/Display';

export default function App() {
  const [value, setValue] = useState("0")

  return (
    <SafeAreaView style={styles.safeArea}>
      <Display value={value}/>
      <View style={styles.buttomArea}>
        <Buttom text="AC" triple operation press={()=>setValue('0')}/>
        <Buttom text="/" operation/>

        <Buttom text="7"/>
        <Buttom text="8"/>
        <Buttom text="9"/>
        <Buttom text="*" operation/>

        <Buttom text="4"/>
        <Buttom text="5"/>
        <Buttom text="6"/>
        <Buttom text="+" operation/>

        <Buttom text="1"/>
        <Buttom text="2"/>
        <Buttom text="3"/>
        <Buttom text="-" operation/>

        <Buttom text="0" double/>
        <Buttom text="." operation/>
        <Buttom text="=" operation/>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,  
  },
  buttomArea:{
    height: (Dimensions.get('window').width/4)*5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  }
});
