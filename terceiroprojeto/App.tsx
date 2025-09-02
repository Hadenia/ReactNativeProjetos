import React, { useState } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, SafeAreaView, TextInput, Button, FlatList, View, TouchableOpacity, Switch } from 'react-native';

export default function App() {

  const [tarefa, setTarefa] = useState('');

  const [dados, setDados] = useState([
    { id: "1", titulo: "Item 1", concluido: false  },
    { id: "2", titulo: "Item 2", concluido: false  }
  ]);

  const cadastrarTarefa = () =>{

    if(tarefa.trim()===''){
      alert('Por favor, insira uma tarefa válida.');
    //  return; 
    } 
    setDados([...dados, {id: Math.random().toString(), titulo: tarefa, concluido: false}]);
    setTarefa('');
  };

  const removerTarefa = (id: string) => {
    setDados(dados.filter(item => item.id !== id));
  };

  
const confirmarExclusao = (id: string) => {
  Alert.alert(
    "Excluir tarefa",
    "Tem certeza que deseja excluir esta tarefa?",
    [
      {
        text: "Sim",
        onPress: () => console.log("Cancelado"),
        style: "cancel"
      },
      {
        text: "Não",
        onPress: () => removerTarefa(id)
      }
    ]
  );
};

  const alternarConcluido = (id: string) => {
     setDados(dados.map(item => item.id === id ? { ...item, concluido: !item.concluido } : item
  );
};

  const renderItem = ({item}: {item : {id: string; titulo: string; concluido: boolean}}) => (
    <View style={[styles.itemContainer, item.concluido && styles.itemConcluido]}>
      <Text style={styles.itemText}>{item.titulo}</Text>
      <Switch value={item.concluido} onValueChange={() => alternarConcluido(item.id)}/>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => confirmarExclusao(item.id)}>
        <Text style={{ color: '#fff' }}>Excluir</Text>
    </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.textLabel}>Tarefa: </Text>      
      <TextInput style={styles.input} value={tarefa} onChangeText={setTarefa} placeholder='Ex: Ir academia'></TextInput>

      <TouchableOpacity style={styles.buttonStyle} onPress={cadastrarTarefa}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Cadastrar</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.textLabel}>Minhas Tarefas</Text>
        <FlatList data={dados} keyExtractor={item => item.id} renderItem={renderItem}></FlatList>
      </View> 

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 50,
    backgroundColor: '#dfcdcdff',
    justifyContent: 'flex-start',
    padding: 20,
  },
  input :{
    borderWidth: 1,
    borderColor: '#0a0a0aff',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  textLabel:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  buttonStyle:{
    marginBottom: 20,
    backgroundColor: '#0a0a0aff',
    padding: 10,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
  },
   itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 8,
    borderRadius: 8,
  },
  itemConcluido: {
    backgroundColor: '#4caf50', // verde
  },
  itemText: {
    fontSize: 16,
    color: '#222',
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#e63946',
    padding: 8,
    borderRadius: 6,
  },
});
