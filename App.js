import { StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
import { useState } from 'react';
import { Buttom } from './src/components/Buttom'
import { Display } from './src/components/Display';

export default function App() {
  const [displayV, setDisplayV] = useState("0")
  const [clearDisplay, setClearDisplay] = useState(false)
  const [numbers, setNumbers] = useState([0,0])
  const [position, setPosition] = useState(0)
  const [symbol, setSymbol] = useState('')

  function setNumber(params) {
    if(params == "." && displayV.includes('.')) {return}
    if(clearDisplay){
      setDisplayV('')
      setClearDisplay(false)

      const newValue = params !=='.' ? params : '0'+params
      setDisplayV(newValue)
    }else{
      const newValue = displayV === '0' && params !=='.' ? params : displayV+params
      setDisplayV(newValue)
    }
  }

  function setOperation(params) {
    let val = numbers
    setSymbol(params)

    if(position === 0){
      setClearDisplay(true)
      val[position] = parseFloat(displayV)
      setNumbers(val)
      setPosition(1)
      //console.log(numbers, position)
    }else{
      val[position] = parseFloat(displayV)
      //console.log(numbers, position)

      try {
        //console.log(`${val[0]} ${symbol} ${val[1]} `)
        val[0] = eval(`${val[0]} ${symbol} ${val[1]}`)
        val[1] = 0
        
        
      } catch (error) {
        val[0] = numbers[0] 
        //console.log(error)
      }

      setPosition(params==='='? 0 : 1)
      setNumbers(val)
      setDisplayV(`${numbers[0]}`)
      setClearDisplay(true)
      //console.log(numbers, 'final')
    }
  }

  function clear() {
    setDisplayV('0')
    setNumbers([0,0])
    setPosition(0)
    setSymbol('')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Display value={displayV}/>
      <View style={styles.buttomArea}>
        <Buttom text="AC" triple operation press={clear}/>
        <Buttom text="/" operation press={setOperation}/>

        <Buttom text="7" press={setNumber}/>
        <Buttom text="8" press={setNumber}/>
        <Buttom text="9" press={setNumber}/>
        <Buttom text="*" operation press={setOperation}/>

        <Buttom text="4" press={setNumber}/>
        <Buttom text="5" press={setNumber}/>
        <Buttom text="6" press={setNumber}/>
        <Buttom text="+" operation press={setOperation}/>

        <Buttom text="1" press={setNumber}/>
        <Buttom text="2" press={setNumber}/>
        <Buttom text="3" press={setNumber}/>
        <Buttom text="-" operation press={setOperation}/>

        <Buttom text="0" double press={setNumber}/>
        <Buttom text="." press={setNumber}/>
        <Buttom text="=" operation press={setOperation}/>

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
