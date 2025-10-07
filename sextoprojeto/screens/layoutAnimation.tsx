// import React from 'react';
// import {NativeModules, LayoutAnimation, Text, TouchableOpacity, StyleSheet, View, Platform} from 'react-native';

// const { UIManager } = NativeModules;

// export default class App extends React.Component {
//     state = { w: 200, h: 200, };

//     componentDidMount() {
//         if (Platform.OS === 'android') {
//             if (UIManager.setLayoutAnimationEnabledExperimental) {
//                 UIManager.setLayoutAnimationEnabledExperimental(true);
//             }
//         }
//     }

//     _onPress = () => {
//         LayoutAnimation.spring();
//         this.setState({ w: this.state.w - 5, h: this.state.h - 5 })
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={[styles.box, { width: this.state.w, height: this.state.h }]} />
//                 <TouchableOpacity onPress={this._onPress}>
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>Pressione para diminuir o quadrado</Text>
//                     </View>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     box: {
//         width: 200,
//         height: 200,
//         backgroundColor: 'orange',
//     },
//     button: {
//         backgroundColor: 'black',
//         paddingHorizontal: 20,
//         paddingVertical: 15,
//         marginTop: 15,
//     },
//     buttonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//     },
// });

import React, { useEffect, useState } from 'react';
import {NativeModules, LayoutAnimation, Text, TouchableOpacity, StyleSheet, View, Platform} from 'react-native';

const LayoutAnimationS = () => {
    const [isReady, setIsReady] = useState(false);
    const [w, setW] = useState(200);
    const [h, setH] = useState(200);

    useEffect(() => {
        if (Platform.OS === 'android') {
            const { UIManager } = NativeModules;
            if (UIManager && UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
        setIsReady(true); // Define o estado como "pronto" após a verificação
    }, []);

    const _onPress = () => {
        LayoutAnimation.spring();
        setW(w - 5);
        setH(h - 5);
    }

    const _onPress2 = () => {
        LayoutAnimation.spring();
        setW(w + 5);
        setH(h + 5);
    }

    if (!isReady) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Carregando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={[styles.box, { width: w, height: h }]} />
            <TouchableOpacity onPress={_onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Pressione para diminuir o quadrado</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={_onPress2}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Pressione para aumentar o quadrado</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'orange',
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default LayoutAnimationS;