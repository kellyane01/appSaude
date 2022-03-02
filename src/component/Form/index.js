import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import ResultImc from "./ResultImc/";
import styles from "./style";

export default function Form() {

    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');

    function calcularImc() {
        return setImc((peso / (altura * altura)).toFixed(2));
    }

    function validacaoImc() {
        if (peso != null && altura != null) {
            calcularImc();
            setAltura(null);
            setPeso(null);
            setMessageImc('Seu IMC é igual:');
            setTextButton('Calcular novamente');
            return;
        }
        setImc(null);
        setTextButton('Calcular');
        setMessageImc('Preencha o peso e altura');
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Digite sua altura"
                    keyboardType="numeric"
                    style={styles.formInput}
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Digite seu peso"
                    keyboardType="numeric"
                    style={styles.formInput}
                />

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validacaoImc()}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}