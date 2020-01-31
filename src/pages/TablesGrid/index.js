import React, {useState} from 'react';

import Background from '../../components/Background';
import Table from '../../components/Table';
import {Container, List, Title} from './styles';

export default function TablesGrid() {
  const [orders, setOrders] = useState([]);
  return (
    <Background>
      <Container>
        <Title>Comandas</Title>
        <List
          data={orders}
          keyExtractor={item => String(item)}
          renderItem={({item}) => <Table data={item} />}></List>
      </Container>
    </Background>
  );
}
