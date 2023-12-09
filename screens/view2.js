import React from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import styles from './styles'; // Antager, at din styles.js ligger i samme mappe
import InputField from '../components/InputField'; // Antager, at komponenten ligger i components mappen

const View2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Opgave Detaljer</Text>
      
      <InputField label="Deadline" />
      <InputField label="Lokation" />
      <InputField label="Startdato" />
      
      <Picker style={styles.picker}>
        {/* Picker items for Sprogkrav */}
      </Picker>
      
      <Picker style={styles.picker}>
        {/* Picker items for Uddannelsesniveau */}
      </Picker>

      <Picker style={styles.picker}>
        {/* Picker items for Erfaring */}
      </Picker>
      
      {/* Andre nødvendige komponenter */}
    </View>
  );
};

export default View2;
