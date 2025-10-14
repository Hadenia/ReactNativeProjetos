import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, Alert, RefreshControl } from 'react-native';
import { styles } from '../styles/CommonStyles';
import ProdutoItem from '../components/ProdutoItem';
import { listarProdutos, removerProduto } from '../services/ProdutoService';
import { Produto } from '../models/Produto';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';

type RootStack = {
  Lista: undefined;
  Form: { editarCodigo?: number } | undefined;
};

type Props = NativeStackScreenProps<RootStack, 'Lista'>;

export default function ProdutoLista({ navigation }: Props) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(false);

  const carregar = async () => {
    setLoading(true);
    try {
      const data = await listarProdutos();
      setProdutos(data);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      carregar();
    }, [])
  );

  function confirmarExclusao(codigo: number) {
    Alert.alert(
      'Excluir',
      `Tem certeza que deseja excluir o produto ${codigo}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            await removerProduto(codigo);
            carregar();
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.headerBtn}
        onPress={() => navigation.navigate('Form')}
      >
        <Text style={styles.headerBtnText}>Novo Produto</Text>
      </TouchableOpacity>

      <FlatList
        style={styles.scrollContainer}
        data={produtos}
        keyExtractor={(item) => String(item.codigo)}
        contentContainerStyle={styles.itemsContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto cadastrado.</Text>}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={carregar} tintColor="#fff" />
        }
        renderItem={({ item }) => (
          <ProdutoItem
            produto={item}
            onEdit={() => navigation.navigate('Form', { editarCodigo: item.codigo })}
            onDelete={() => confirmarExclusao(item.codigo)}
          />
        )}
      />
    </View>
  );
}
