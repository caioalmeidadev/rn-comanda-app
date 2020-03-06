import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TableNo} from './styles';

export default function Table({data, onSelect}) {
  return (
    <Container onPress={onSelect}>
      <Icon name="restaurant" size={40} color="#D3D3D3" />
      <TableNo>{data.codigoComanda}</TableNo>
    </Container>
  );
}
