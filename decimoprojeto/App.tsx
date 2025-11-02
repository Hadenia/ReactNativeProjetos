//-------------------

// import React, { useEffect, useState } from 'react';
//  import { StyleSheet, Text, View } from 'react-native';
//  import axios from 'axios';
 
//  export default function App() {
//    const [isLoading, setLoading] = useState(true);
//    const [data, setData] = useState();
 
//    useEffect(() => {
//      setLoading(true);
 
//      const token = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
//      const dados = { 'name': 'Maria', 'gender': 'female', 'email': 'maria@email.com.br', 'status': 'active' };
 
//      axios.post('https://gorest.co.in/public/v1/users', dados, {
//        headers: {
//          'Authorization': `Bearer ${token}`
//        },
//      })
//        .then(function (response) {
//          // handle success
//          console.log('Resultado: ');
//          console.log(response.data);
//          setData(response.data);
//        })
//        .catch(function (error) {
//          // handle error
//          console.log(error);
//        })
//        .then(function () {
//          // always executed
//          setLoading(false);
//        });
 
//    }, []);
 
//    return (
//      <View style={styles.container}>
//        <Text>{JSON.stringify(data)}</Text>
//      </View>
//    );
//  }
 
//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      backgroundColor: '#fff',
//      alignItems: 'center',
//      justifyContent: 'center',
//    },
//  });


//---

import React, { useEffect, useState } from 'react';
 import { StyleSheet, Text, View } from 'react-native';
 import axios from 'axios';
 
 export default function App() {
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState();
 
   useEffect(() => {
     setLoading(true);
 
     const token = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      const dados = { 'name': 'Maria das Dores', 'gender': 'female', 'email': 'maria@email.com.br', 'status': 'active' };;
 
     axios.put('https://gorest.co.in/public/v1/users/8221925', dados, {
       headers: {
         'Authorization': `Bearer ${token}`
       },
     })
       .then(function (response) {
         // handle success
         console.log(response.data);
         setData(response.data);
       })
       .catch(function (error) {
         // handle error
         console.log(error);
       })
       .then(function () {
         // always executed
         setLoading(false);
       });
 
   }, []);
 
   return (
     <View style={styles.container}>
       <Text>{JSON.stringify(data)}</Text>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });