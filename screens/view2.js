//view2.js
import React from 'react';
import { View, Text, TextInput, Picker, Button } from 'react-native';
import styles from '../styles/styles';

const View2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Opgave Detaljer</Text>
            
            {/* Eksempel på et tekstfelt */}
            <TextInput style={styles.input} placeholder="Deadline" />

            {/* Eksempel på en dropdown-menu */}
            <Picker style={styles.picker}>
                <Picker.Item label="Vælg sprogkrav" value="default" />
                <Picker.Item label="Dansk" value="danish" />
                <Picker.Item label="Engelsk" value="english" />
                {/* Flere valgmuligheder... */}
            </Picker>

            {/* Flere felter og dropdown-menuer... */}

            <Button title="Gem Opgave" onPress={() => {/* Gem og naviger væk logik */}} />
        </View>
    );
};

export default View2;
