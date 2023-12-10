// view1.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles'; // Importer stilarter

const View1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Velkommen til Applikationen</Text>
            <Button 
                title="Opret Opgave" 
                onPress={() => navigation.navigate('View2')} // Opdateret til at navigere til View2
            />
        </View>
    );
};

export default View1;
