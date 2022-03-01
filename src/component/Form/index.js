import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import ResultImc from "./ResultImc/";

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
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Digite sua altura"
                    keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Digite seu peso"
                    keyboardType="numeric"
                />

                <Button
                    onPress={() => validacaoImc()}
                    title={textButton}
                />
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}