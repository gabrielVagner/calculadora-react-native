import { StyleSheet, Text, View} from 'react-native';

export function Display({value}) {
  return (
    <View style={styles.display}>
        <Text style={styles.text} numberOfLines={1}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    display:{
        backgroundColor: 'rgba(0,0,0, 0.3)',
        alignItems: 'flex-end',
        flexDirection: 'column-reverse',
        padding: 20,
        alignContent: 'center',
        flex: 1
        
    },
    text: { 
        fontSize: 60,
        color: 'black',
        
    }
});
