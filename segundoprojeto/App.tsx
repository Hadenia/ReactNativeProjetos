// import { StatusBar } from 'expo-status-bar';
// import React from "react";
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         height: 100,
//         padding: 20, 
//         backgroundColor:"gray"
//       }}
//     >
//       <View style={{ backgroundColor: "red", flex: 0.5 }} />
//       <Text>Olá, mundo!</Text>
//     </View>
//   );
// }
//--------------------------------------------------

//Exemplo de Componente VIEW

// import React from "react";
// import { View, Text } from "react-native";

// const ViewExemplo = () => {
//   return (
// 	<View style={{flexDirection: "row",	height: 100, padding: 20,	backgroundColor: "gray", }}>
// 	  <View style={{ backgroundColor: "red", flex: 0.5 }} />
// 	  <Text>Olá, mundo!</Text>
// 	</View>
//   );
// };

// export default ViewExemplo;

//--------------------------------------------------
//Exemplo de Componente TEXT
// import React, { useState } from "react";
// import { Text, StyleSheet, View, Button } from "react-native";

// const TextoAninhado = () => {
//   const [titulo, setTitulo] = useState("Texto do elemento filho");
// //const [valor, setValor] = useState(valorInicial);

//   const modificaTexto = () => {
// 	setTitulo("Esse texto está sendo exibido pois o primeiro elemento de texto foi pressionado/tocado");
//   };

//   return (
// 	<Text style={styles.baseText}>
// 	  <Text style={styles.titulo} onPress={modificaTexto}>
// 		{titulo}
// 		{"\n"}
// 		{"\n"}
// 	  </Text>
// 	</Text>
//   );

// };

// const styles = StyleSheet.create({
//   baseText: {
// 	fontFamily: "Verdana",
// 	marginTop:50,
// 	marginLeft:10
//   },
//   titulo: {
// 	marginTop:10,
// 	fontSize: 18,
// 	fontWeight: "bold"
//   }
// });

// export default TextoAninhado;
//--------------------------------------------------

/* Exemplo de Componente Image */
// import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   imagem: {
//     width: 70,
//     height: 70,
//     alignSelf: 'center'
//   }
// });

// const ComponenteSimplesImage = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.imagem}
//         source={{
//           uri: 'https://reactnative.dev/img/tiny_logo.png',
//         }}
//       />
//     </View>
//   );
// }

// export default ComponenteSimplesImage;

//--------------------------------------------------

/* Exemplo de Componente TextInput */

// import React, { useState } from "react";
// import { SafeAreaView, StyleSheet, TextInput } from "react-native";

// const MeuTextInput = () => {
//   const [texto, setTexto] = useState(null);
//   const [numero, setNumero] = useState<string>("");

//   return (
//     <SafeAreaView>
//       <TextInput
//         style={styles.meutextinput}
//         value={texto}
//       />
//       <TextInput
//         style={styles.meutextinput}
//         onChangeText={setNumero}
//         value={numero}
//         keyboardType="numeric"
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   meutextinput: {
//     marginTop: 100,
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//   },
// });

// export default MeuTextInput;

//--------------------------------------------------

/* Exemplo de Componente ScrollView */

// import React from 'react';
// import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

// const Lista = () => {
//   return (
// 	<SafeAreaView style={styles.safecontainer}>
// 	  <ScrollView style={styles.containerScrollView}>
// 		<Text style={styles.text}>
// 		  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// 					Pellentesque id dui sed nulla imperdiet scelerisque.
// 					Integer malesuada facilisis nibh varius eleifend.
// 					Cras a velit laoreet dui interdum consectetur.
// 					Pellentesque volutpat placerat mauris in interdum.
// 					Pellentesque non egestas sem. Suspendisse malesuada at augue
// 					sit amet pretium.
// 					Praesent odio nisl, semper vitae purus a, elementum ultrices arcu.
// 					Praesent blandit lectus et aliquet posuere.
// 					Nulla dictum, nisi id feugiat suscipit, mi sem maximus turpis,
// 					vel aliquet massa ex sit amet sem.
// 					Sed ullamcorper enim non elit vestibulum, feugiat euismod elit
// 					consectetur. In et pulvinar eros.
// 		</Text>
// 	  </ScrollView>
// 	</SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safecontainer: {
// 	flex: 1,
// 	paddingTop: StatusBar.currentHeight,
//   },
//   containerScrollView: {
// 	backgroundColor: 'grey',
// 	marginHorizontal: 20,
//   },
//   text: {
// 	fontSize: 40,
//   },
// });

// export default Lista;

//--------------------------------------------------

/* Exemplo de Componente Button, Flat e Swich */
import React, { useState } from "react";
import {SafeAreaView, View, Text, Button, Switch, FlatList, StyleSheet,} from "react-native";

const App = () => {
  const [isAtivo, setIsAtivo] = useState(false); // estado do Switch
  const [contador, setContador] = useState(0);   // estado do Button

  // Dados para FlatList
  const dados = [
    { id: "1", titulo: "Item 1" },
    { id: "2", titulo: "Item 2" },
    { id: "3", titulo: "Item 3" },
    { id: "4", titulo: "Item 4" },
  ];


  const incrementContador = () => {
	    setContador(contador + 1);
      console.log(`Contador: ${contador + 1}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Switch */}
      <View style={styles.caixa}>
        <Text>Status: {isAtivo ? "Ativado ✅" : "Desativado ❌"}</Text>
        <Switch value={isAtivo} onValueChange={setIsAtivo} />
      </View>

      {/* Button */}
      <View style={styles.caixa}>
        <Text>Você clicou {contador} vezes</Text>
        <Button title="Clique aqui" onPress={incrementContador} />
      </View>

      {/* FlatList */}
      <View style={styles.caixa}>
        <Text style={styles.titulo}>Lista de Itens:</Text>
        <FlatList
          data={dados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.titulo}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 20,
  },
  caixa: {
    marginBottom: 30,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
});

export default App;
//--------------------------------------------------