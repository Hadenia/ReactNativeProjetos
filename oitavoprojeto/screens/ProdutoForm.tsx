import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/CommonStyles';
import { Produto } from '../models/Produto';
import { adicionarProduto, atualizarProduto, obterProduto } from '../services/ProdutoService';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStack = {
  Lista: undefined;
  Form: { editarCodigo?: number } | undefined;
};

type Props = NativeStackScreenProps<RootStack, 'Form'>;

export default function ProdutoForm({ navigation, route }: Props) {
  const editarCodigo = route.params?.editarCodigo;

  const [codigo, setCodigo] = useState<string>('');
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState<string>('');

  useEffect(() => {
    if (editarCodigo != null) {
      // Carrega os dados para edição
      (async () => {
        const p = await obterProduto(editarCodigo);
        if (p) {
          setCodigo(String(p.codigo));
          setNome(p.nome);
          setQuantidade(String(p.quantidade));
        }
      })();
    }
  }, [editarCodigo]);

  async function salvar() {
    try {
      const p: Produto = {
        codigo: Number(codigo),
        nome,
        quantidade: Number(quantidade),
      };
      if (editarCodigo != null) {
        await atualizarProduto(p);
      } else {
        await adicionarProduto(p);
      }
      navigation.goBack();
    } catch (e: any) {
      Alert.alert('Erro', e?.message ?? 'Falha ao salvar produto.');
    }
  }

  return (
    <View style={[styles.container, { paddingTop: 16 }]}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Código"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={codigo}
          onChangeText={setCodigo}
          editable={editarCodigo == null} // não edita o código em edição
        />
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#666"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={setQuantidade}
        />
        <TouchableOpacity style={styles.saveButton} onPress={salvar}>
          <Text style={styles.buttonTextBig}>
            {editarCodigo != null ? 'Atualizar' : 'Salvar'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
