import React, {useState} from 'react';
import {View, Keyboard, Text, TextInput, TouchableOpacity} from 'react-native';
import ResultImc from "./ResultImc/";
import InformacoesImc from "./InformacoesImc/";
import styles from "./style";

export default function Form() {

    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura');
    const [imc, setImc] = useState(null);
    const [messageClassificacaoImc, setMessageClassificacaoImc] = useState('');
    const [messagePesoIdeal, setMessagePesoIdeal] = useState('');
    const [textButton, setTextButton] = useState('Calcular');

    function calcularImc() {
        let novoPeso = peso.replace(',', '.');
        let novaAltura = altura.replace(',', '.');
        let calculo = (novoPeso / (novaAltura * novaAltura)).toFixed(1);

        setImc(calculo);
        return calculo;
    }

    function informacoesImc(calculoImc) {
        let classificacao;
        if (calculoImc >= 40) {
            classificacao = 'Obesidade grau III ou mórbida';
        } else if (calculoImc >= 35) {
            classificacao = 'Obesidade grau II';
        } else if (calculoImc >= 30) {
            classificacao = 'Obesidade grau I';
        } else if (calculoImc >= 25) {
            classificacao = 'Sobrepeso';
        } else if (calculoImc >= 18.5) {
            classificacao = 'Normal';
        } else {
            classificacao = 'Abaixo do peso';
        }
        setMessageClassificacaoImc('Classificação: ' + classificacao);
    }

    function validacaoImc() {
        Keyboard.dismiss();
        if (peso != null && altura != null) {
            informacoesImc(calcularImc());
            setAltura(null);
            setPeso(null);
            setMessageImc('Seu IMC é igual:');
            setTextButton('Calcular novamente');
            return;
        }
        setImc(null);
        setTextButton('Calcular');
        setMessageImc('Preencha o peso e altura');
        setMessageClassificacaoImc('');
        setMessagePesoIdeal('');
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

            <ResultImc
                messageResultImc={messageImc}
                resultImc={imc}
            />
            <InformacoesImc
                messageClassificacaoImc={messageClassificacaoImc}
                messagePesoIdeal={messagePesoIdeal}/>
        </View>
    );
}