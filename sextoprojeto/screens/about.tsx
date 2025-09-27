import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>About Screen</Text>
            <Button title='Ir para Home' onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        paddingTop: 20
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 5,
        paddingBottom: 20
    },
});

export default AboutScreen;