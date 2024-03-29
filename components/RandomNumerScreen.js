import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RandomNumberScreen = () => {
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const [randomNumber, setRandomNumber] = useState('');

    const generateRandomNumber = () => {
        const min = parseInt(minValue);
        const max = parseInt(maxValue);

        if (isNaN(min) || isNaN(max) || min >= max) {
            setRandomNumber('Entrada inválida');
        } else {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            setRandomNumber(random.toString());
        }
    };

    return (
        <View>
            <Text>Informe o valor mínimo</Text>
            <TextInput
                value={minValue}
                onChangeText={setMinValue}
                keyboardType="numeric"
            />
            
            <Text>Informe o valor máximo</Text>
            <TextInput
                value={maxValue}
                onChangeText={setMaxValue}
                keyboardType="numeric"
            />
            <Button title="Gerar Número Aleatório" onPress={generateRandomNumber} />
            
            <Text>{randomNumber}</Text>
        </View>
    );
};

export default RandomNumberScreen;