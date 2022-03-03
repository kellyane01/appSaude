import React from 'react';
import {View, Text} from 'react-native';
import styles from "./style";

export default function ResultImc(props) {
    return (
        <View style={styles.informacoesImc}>
            <Text style={styles.informacao}>{props.messageClassificacaoImc}</Text>
            <Text style={styles.informacao}>{props.messagePesoIdeal}</Text>
        </View>
    );
}