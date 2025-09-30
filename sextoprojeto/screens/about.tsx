import * as React from 'react';
import { View, Text, Button} from 'react-native';
import styles from '../styles';

function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>About Screen</Text>
            <Button title='Ir para Home' onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

export default AboutScreen;