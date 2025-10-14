import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/CommonStyles';
import { Produto } from '../models/Produto';

type Props = {
  produto: Produto;
  onDelete: () => void;
  onEdit?: () => void;
};

export default function ProdutoItem({ produto, onDelete, onEdit }: Props) {
  return (
    <View style={styles.itemBox}>
      <Text style={styles.textItem}>
        {produto.codigo} — {produto.nome}
      </Text>
      <Text style={styles.textItem}>Quantidade: {produto.quantidade}</Text>
      <View style={styles.buttonsContainer}>
        {!!onEdit && (
          <TouchableOpacity style={styles.editButton} onPress={onEdit}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
