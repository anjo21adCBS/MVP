// view1.js
import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/comp1'; // Importer komponent
import styles from '../styles/styles'; // Importer stilarter

const View1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Velkommen til Applikationen</Text>
            <CustomButton 
                title="Opret Opgave" 
                onPress={() => navigation.navigate('OpgaveDetaljer')} // Erstat med korrekt navigation
            />
        </View>
    );
};

export default View1;
