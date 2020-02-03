import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';
import Table from '../../components/Table';

import {Container, List, Title, NovaComanda, Header, Camera} from './styles';

const tables = ['0001', '0005', '0062', '0080'];

export default function TablesGrid() {
  const [orders, setOrders] = useState(tables);
  return (
    <Background>
      <Container>
        <Title>Comandas</Title>
        <Header>
          <NovaComanda placeholder="Digite o código da comanda" />
          <Camera onPress={() => {}}>
            <Icon name="photo-camera" size={40} color="#C0C0C0" />
          </Camera>
        </Header>
        <List
          data={orders}
          keyExtractor={item => String(item)}
          renderItem={({item}) => <Table data={item} onPress={() => {}} />}
        />
      </Container>
    </Background>
  );
}
