/* FETCH API*/

// import React, { useEffect, useState } from 'react';
// import { FlatList, Text, View, StyleSheet, ActivityIndicator, Platform, TouchableOpacity} from 'react-native';

// interface Produto {
//   _id: number;
//   nome: string;
//   quantidade: number;
// }

// const App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState<Produto[]>([]);
//   const [error, setError] = useState<string | null>(null);

//  const API_URL = Platform.select({
//     ios: 'http://localhost:3000/',
//     android: __DEV__ 
//       ? 'http://192.168.1.5:3000/' // Substitua SEU_IP_LOCAL pelo seu IP
//       : 'http://10.0.2.2:3000/',
//   });

//   useEffect(() => {
//      console.log('Tentando acessar:', API_URL);
//     fetch(API_URL)
//       .then((response) => response.json())
//       .then((json) => {
//         console.log('Dados recebidos:', json);
//         setData(json);
//       })
//       .catch((error) => {
//         console.error('Erro no fetch:', error);
//         setError(error.message);
//       })
//       .finally(() => setLoading(false));
//   }, []);


// const addProduto = async () => {
//     try {
//       const response = await fetch(`${API_URL}new`, {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           codigo: Math.floor(Math.random() * 1000),
//           nome: 'Novo Produto',
//           quantidade: 10
//         })
//       });

//       const data = await response.json();
//       console.log('Produto adicionado:', data);
      
//       // Atualiza a lista
//       fetch(API_URL)
//         .then(response => response.json())
//         .then(json => setData(json))
//         .catch(error => setError(error.message));

//     } catch (error) {
//       console.error('Erro ao adicionar produto:', error);
//       setError(error.message);
//     }
//   };


//   if (error) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>Erro: {error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {isLoading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <View style={styles.content}>
//           <TouchableOpacity 
//             style={styles.addButton}
//             onPress={addProduto}
//           >
//             <Text style={styles.addButtonText}>Adicionar Produto</Text>
//           </TouchableOpacity>

//           <Text style={styles.title}>Lista de Produtos:</Text>
//           <FlatList
//             data={data}
//             keyExtractor={(item) => item.codigo.toString()}
//             renderItem={({ item }) => (
//               <View style={styles.itemContainer}>
//                 <Text style={styles.itemText}>
//                   Nome: {item.nome}{'\n'}
//                   Quantidade: {item.quantidade}
//                 </Text>
//               </View>
//             )}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//   },
//   content: {
//     flex: 3,
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   title: {
//     fontSize: 18,
//     color: '#333',
//     textAlign: 'center',
//     paddingBottom: 10,
//     fontWeight: 'bold',
//   },
//   itemContainer: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   itemText: {
//     fontSize: 16,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//     addButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5,
//     marginBottom: 20,
//     alignItems: 'center'
//   },
//   addButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold'
//   }
// });

// export default App;


//npm install axios
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, ActivityIndicator, Platform, TouchableOpacity} from 'react-native';
import axios from 'axios';

interface Produto {
  _id: number;
  nome: string;
  quantidade: number;
}

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Produto[]>([]);
  const [error, setError] = useState<string | null>(null);

  const API_URL = Platform.select({
    ios: 'http://localhost:3000/',
    android: __DEV__ 
      ? 'http://192.168.1.5:3000/' 
      : 'http://10.0.2.2:3000/',
  });

  // Create axios instance
  const api = axios.create({
    baseURL: API_URL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const listarProdutos = async () => {
    try {
      const response = await api.get('');
      setData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
        console.error('Erro na requisição:', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('Tentando acessar:', API_URL);
    listarProdutos();
  }, []);

  const addProduto = async () => {
    try {
      const novoProduto = {
        codigo: Math.floor(Math.random() * 1000),
        nome: 'Novo Produto Axios',
        quantidade: 100
      };

      const response = await api.post('new', novoProduto);
      console.log('Produto adicionado:', response.data);
      
      // Atualiza a lista
      listarProdutos();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
        console.error('Erro ao adicionar produto:', error.message);
      }
    }
  };

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.content}>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={addProduto}
          >
            <Text style={styles.addButtonText}>Adicionar Produto</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Lista de Produtos:</Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.codigo.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>
                  Nome: {item.nome}{'\n'}
                  Quantidade: {item.quantidade}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  content: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center'
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default App;

