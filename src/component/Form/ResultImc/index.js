import React from 'react';
import {View, Text} from 'react-native';
import styles from "./style";

export default function ResultImc(props){
    return(
        <View style={styles.resultImc}>
            <Text style={styles.informacao}>{props.messageResultImc}</Text>
            <Text style={styles.numeroImc}>{props.resultImc}</Text>
        </View>
    );
}