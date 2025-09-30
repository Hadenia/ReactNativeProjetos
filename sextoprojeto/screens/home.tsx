import * as React from 'react';
import { View, Text, Button} from 'react-native';
import styles from '../styles';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Home Screen</Text>
            <Button title='Ir para About' onPress={() => navigation.navigate('About')} />
        </View>
    );
}

export default HomeScreen;