import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProdutoLista from './screens/ProdutoLista';
import ProdutoForm from './screens/ProdutoForm';

export type RootStackParamList = {
  Lista: undefined;
  Form: { editarCodigo?: number } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Lista"
        screenOptions={{
          headerStyle: { backgroundColor: '#ffffffff' },
          headerTintColor: '#030303ff',
          contentStyle: { backgroundColor: '#ffffffff' },
        }}
      >
        <Stack.Screen name="Lista" component={ProdutoLista} options={{ title: 'Produtos' }}/>
        <Stack.Screen name="Form" component={ProdutoForm} options={({ route }) => ({
            title: route.params?.editarCodigo != null ? 'Editar Produto' : 'Novo Produto',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
