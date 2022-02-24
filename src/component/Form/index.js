import React from 'react';
import {View, Text, TextInput} from 'react-native';

export default function Form() {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    placeholder="Digite sua altura"
                    keyboard
                />
                <Text>Peso</Text>
                <TextInput
                    placeholder="Digite seu peso"
                    keyboard="numeric"
                />
            </View>
        </View>
    );
}