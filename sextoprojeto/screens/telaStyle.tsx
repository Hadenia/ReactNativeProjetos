
import React from 'react';
 import { Text } from 'react-native';
 import styled from 'styled-components/native'

 const Estilos = () => {
     return (
             <StyledText>Uso do styled-components onde permite estilização semelhante ao CSS e criação de componentes personalizados</StyledText>
     );
 };

 const StyledText = styled.Text`
     color: blue;
     margin-top: 50px;
     margin-left:50px;
 `;

 export default Estilos;