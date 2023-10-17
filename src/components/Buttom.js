import { StyleSheet, Text, View, TouchableHighlight, Dimensions} from 'react-native';

export function Buttom(props) {
    const styleB = [styles.buttom]
    if(props.double) styleB.push(styles.buttomDouble)
    if(props.triple) styleB.push(styles.buttomTriple)
    if(props.operation) styleB.push(styles.operation)
    return (
        <TouchableHighlight style={styleB} onPress={()=>props.press(props.text)}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        textAlign: 'center'
    },
    buttom: {
        backgroundColor: '#888',
        padding: 20,
        borderWidth: 1,
        borderColor: '#000',
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4
    },
    buttomDouble:{
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttomTriple:{
        width: (Dimensions.get('window').width / 4) * 3
    },
    operation:{
        backgroundColor: '#0d0',
    }
});
