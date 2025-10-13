// ----------- Exemplo 1 - VirtualizedList---------------
// import React from 'react';
// import { View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';

// const DATA: { id: string; title: string }[] = [];

// const getItems = (_data: unknown, index: number) => ({
//     id: Math.random().toString(12).substring(0),
//     title: `Item ${index + 1}`
// });

// const getItemsCount = (_data: unknown) => 100;

// const Item = ({ title }) => (
//     <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//     </View>
// );

// const App = () => {
//     return (
//         <View style={styles.container}>
//             <VirtualizedList
//                 data={DATA}
//                 initialNumToRender={4}
//                 renderItem={({ item }) => <Item title={item.title} />}
//                 keyExtractor={item => item.id}
//                 getItemCount={getItemsCount}
//                 getItem={getItems}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight,
//     },
//     item: {
//         backgroundColor: '#7f7fdfff',
//         height: 100,
//         justifyContent: 'center',
//         marginVertical: 8,
//         marginHorizontal: 16,
//         padding: 10,
//     },
//     title: {
//         fontSize: 22,
//     },
// });

// export default App;

// ----------- Exemplo 2 - VirtualizedList---------------

//necessário instalar npm install react-native-paper

// import React from 'react';
// import { View, VirtualizedList, StyleSheet, Text, StatusBar, SafeAreaViewBase } from 'react-native';
// import { Card, Title, Paragraph } from 'react-native-paper';

// const pessoas = [
//     { id: 101, nome: 'Ana' },
//     { id: 102, nome: 'Bia' },
//     { id: 103, nome: 'Carlos' },
//     { id: 104, nome: 'Daniel' },
//     { id: 105, nome: 'Gui' },
//     { id: 106, nome: 'Rebeca' },
//     { id: 107, nome: 'Arthur' },
//     { id: 108, nome: 'Pedro' },
//     { id: 109, nome: 'Gustavo' },
//     { id: 110, nome: 'Aline' },
// ];

// const ItemView = ({ nome, id }) => (
//     <Card style={styles.item}>
//         <Card.Content>
//             <Title>{nome}</Title>
//             <Paragraph>Matricula: {id}</Paragraph>
//         </Card.Content>
//     </Card>
// );

// const getCardItems = (data, index) => (data[index]);
// const numItems = (data) => 8;

// const App = () => {
//     return (
//         <View style={styles.container}>
//             <VirtualizedList
//                 data={pessoas}
//                 renderItem={({ item }) => <ItemView nome={item.nome} id={item.id} />}
//                 keyExtractor={item => item.id}
//                 getItemCount={numItems}
//                 getItem={getCardItems}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight,
//         justifyContent: 'center',
//         padding: 20,        
//         backgroundColor: '#b5b5d6ff',
//     },
//     item: {
//         margin: 8,       
//         elevation: 6
//     }
// });

// export default App;


// ------------Exemplo 3 - SectionList--------------

// import React from 'react';
// import { StyleSheet, Text, View, SectionList, StatusBar, Switch } from 'react-native';

// const DADOS = [
//     {
//         titulo: 'Eletrônicos',
//         data: ['TV', 'Caixa de Som', 'Toca-discos Retrô']
//     },
//     {
//         titulo: 'Vestuário',
//         data: ['Camisas', 'Camisetas', 'Casacos']
//     },
//     {
//         titulo: 'Livros',
//         data: ['Ficção', 'Suspense', 'Policiais']
//     }
// ];

// const Item = ({ texto, id }) => {
//     const [isEnabled, setIsEnabled] = React.useState(false);

//     return (
//         <View style={styles.item}>
//             {/* <Switch id={id} onValueChange={() => setIsEnabled(!isEnabled)} value={isEnabled} /> */}
//             <Text style={styles.titulo}>{texto}</Text>
//         </View>
//     );
// }

// const App = () => (
//     <View style={styles.container}>
//         <SectionList
//             sections={DADOS}
//             keyExtractor={(item, index) => item + index}
//             renderItem={({ item, index }) => <Item texto={item} id={index} />}
//             renderSectionHeader={({ section: { titulo } }) => (
//                 <Text style={styles.header}>{titulo}</Text>
//             )}
//         />
//     </View>
// );

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: StatusBar.currentHeight,
//         marginHorizontal: 16
//     },
//     item: {
//         backgroundColor: '#fffccc',
//         padding: 8,
//         marginVertical: 8,
//         elevation: 6
//     },
//     header: {
//         fontSize: 32,
//         backgroundColor: '#fff'
//     },
//     titulo: {
//         fontSize: 24
//     }
// });

// export default App;

//  ------------Exemplo 4 - FlatList Simples-------------------

// import React from 'react';
// import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

// const DADOS = [
//     {
//         id: '1',
//         descricao: 'TV Led 49'
//     },
//     {
//         id: '4',
//         descricao: 'Camisa Trilha'
//     },
//     {
//         id: '4',
//         descricao: 'Qualquer semelhança é mera coincidência'
//     },
// ];

// const Item = ({ descricao }) => (
//     <View style={styles.item}>
//         <Text style={styles.title}>{descricao}</Text>
//     </View>
// );

// const App = () => {
//     const renderItem = ({ item }) => (
//         <Item descricao={item.descricao} />
//     );

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={DADOS}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight || 0,
//     },
//     item: {
//         backgroundColor: '#cec656ff',
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//     },
//     title: {
//         fontSize: 12,
//     },
// });

// export default App;

//  ------------Exemplo 5 - FlatList com API -------------------

import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const baseURL = "https://api.sampleapis.com/coffee/hot";

export default class App extends Component {
    state = {
        data: [],
        loading: false
    } //não chamar recursivamente o mesmo componente

    componentDidMount() {
        this.loadRepositories();
    }

    loadRepositories = async () => {
        if (this.state.loading) return;
        this.setState({ loading: true });
        const response = await fetch(baseURL);
        const repositories = await response.json();
        this.setState({ data: repositories, loading: false });
    }

    renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text >{item.title}</Text>
            <Text >{item.id}</Text>
        </View>
    );

    render() {
        if (this.state.loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Carregando...</Text>
            </View>
        );
    }
    return (
        <FlatList
            style={{ marginTop: 20 }}
            contentContainerStyle={styles.list}
            data={this.state.data}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderItem}
            numColumns={2}
        />
    );
    }
}

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 20
    },
    listItem: {
        backgroundColor: '#b08261ff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 5,
        height: 100,
        elevation: 4,
        width: '50%',
        padding: 20,
        borderColor: '#000',
        borderWidth: 1
    }
});


//  ------------Exemplo 6 - Picker-------------------

//necessário instalar npm install @react-native-picker/picker

// import React from 'react';
// import { Picker } from '@react-native-picker/picker';
// import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

// const pickerItems = [{ estado: "Rio de Janeiro", sigla: "RJ" },
// { estado: "São Paulo", sigla: "SP" },
// { estado: "Minas Gerais", sigla: "MG" },
// { estado: "Espirito Santo", sigla: "ES" },
// { estado: "Bahia", sigla: "BA" },];

// const App = () => {
//     const [valor, setValor] = React.useState();
//     const [state, setState] = React.useState({ language: 'java' });

//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>Exemplo Picker</Text>
//             <Picker style={styles.item} selectedValue={valor}
//                 onValueChange={(value, index) => setValor(value)}>
//                 {pickerItems.map((opcao) =>
//                     <Picker.Item label={opcao.estado} value={opcao.sigla} key={opcao.sigla} />)}
//             </Picker>
//             <Text style={styles.titulo}>Você selecionou: {valor}</Text>

//             <View style={styles.container}>
//                 <Picker
//                     selectedValue={state.language}
//                     style={styles.item}
//                     onValueChange={(itemValue, itemIndex) =>
//                         setState({ language: itemValue })
//                     }>
//                     <Picker.Item label="Java" value="java" />
//                     <Picker.Item label="JavaScript" value="js" />
//                     <Picker.Item label="C#" value="csharp" />
//                 </Picker>
//             </View>
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: StatusBar.currentHeight,
//         marginHorizontal: 16
//     },
//     item: {
//         backgroundColor: '#fffccc',
//         padding: 8,
//         marginVertical: 8,
//         elevation: 6
//     },
//     header: {
//         fontSize: 32,
//         backgroundColor: '#fff'
//     },
//     titulo: {
//         fontSize: 24
//     }
// });

// export default App;

