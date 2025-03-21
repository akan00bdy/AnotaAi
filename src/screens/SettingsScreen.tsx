import React from 'react';
import { Alert } from 'react-native';
import { clearList } from '../utils/storage';
import { Container, DeleteButton, ButtonText } from '../styles/global';

export default function SettingsScreen() {
  const handleClearList = () => {
    Alert.alert(
      'Limpar Lista',
      'Tem certeza que deseja limpar toda a lista de compras?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpar',
          style: 'destructive',
          onPress: async () => {
            await clearList();
            Alert.alert('Sucesso', 'Lista de compras limpa com sucesso!');
          },
        },
      ]
    );
  };

  return (
    <Container>
      <DeleteButton onPress={handleClearList}>
        <ButtonText>Limpar Lista de Compras</ButtonText>
      </DeleteButton>
    </Container>
  );
} 