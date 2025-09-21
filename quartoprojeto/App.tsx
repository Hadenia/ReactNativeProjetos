import React, { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet, ActivityIndicator, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingModalVisible, setLoadingModalVisible] = useState(false);

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleSim = () => {
    // ação para SIM
    setConfirmModalVisible(false);
    alert('Você escolheu SIM!');
  };

  const handleNao = () => {
    // ação para NÃO
    setConfirmModalVisible(false);
    alert('Você escolheu NÃO!');
  };

  return (
    <View style={styles.container}>

      {/* Modal 1 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Texto dentro da modal</Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Fechar Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable style={styles.buttonOpen} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Abrir Modal</Text>
      </Pressable>

      {/* Modal 2 - ActivityIndicator*/}
      <Modal
        animationType="fade"
        transparent={true}
        visible={loadingModalVisible}
        onRequestClose={() => setLoadingModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#0a84ff" />
            <Text style={styles.modalText}>Carregando...</Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setLoadingModalVisible(false)}
            >
              <Text style={styles.buttonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      
      <Pressable style={[styles.buttonOpen2, { marginTop: 10 }]} onPress={() => setLoadingModalVisible(true)}>
        <Text style={styles.buttonText}>Mostrar Loading</Text>
      </Pressable>


      {/* Modal 3 - Confirmação */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={confirmModalVisible}
        onRequestClose={() => setConfirmModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Deseja continuar?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              <Pressable style={[styles.buttonOpen, { flex: 1, marginRight: 5 }]} onPress={handleSim}>
                <Text style={styles.buttonText}>SIM</Text>
              </Pressable>
              <Pressable style={[styles.buttonClose, { flex: 1, marginLeft: 5 }]} onPress={handleNao}>
                <Text style={styles.buttonText}>NÃO</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable style={[styles.buttonOpen3]} onPress={() => setConfirmModalVisible(true)}>
        <Text style={styles.buttonText}>Abrir Modal de Confirmação</Text>
      </Pressable>

      {/* Exemplos de Buttons - Touchable* */}

      <TouchableHighlight
        onPress={() => alert("“Ilumina” (fundo fica mais claro/escuro) quando pressionado.")}
        underlayColor="#ab2a73ff"
        style={styles.touchableHighlight}
      >
        <Text>Botão Highlight</Text>
      </TouchableHighlight>

      <TouchableOpacity onPress={() => alert("Deixa o conteúdo mais transparente quando pressionado. ")} style={styles.touchableOpacity}>
        <Text>Botão Opacity</Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={() => alert("Não aplica nenhum efeito visual.")}>
        <View style={{ backgroundColor: 'lightblue', padding: 10 }}>
          <Text>Botão invisível</Text>
        </View>
      </TouchableWithoutFeedback>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // fundo semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 5, // sombra no Android
    shadowColor: '#000', // sombra no iOS
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonOpen: {
    backgroundColor: '#0a84ff',
    padding: 12,
    borderRadius: 8,
    marginTop: 10
  },
  buttonOpen2: {
    backgroundColor: '#ff840aff',
    padding: 12,
    borderRadius: 8,
  },
   buttonOpen3: {
    backgroundColor: '#59207fff',
    padding: 12,
    borderRadius: 8,
    marginTop: 10
  },
  buttonClose: {
    backgroundColor: '#ff3b30',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  touchableHighlight:
  {
    marginTop: 20,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  touchableOpacity:
  {
    marginTop: 10,
    backgroundColor: '#860707ff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  }
});
