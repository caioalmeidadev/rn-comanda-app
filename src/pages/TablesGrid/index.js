import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';

import api from './../../services/api';
import {ordersRequest} from './../../store/modules/orders/actions';

import Background from '../../components/Background';
import Table from '../../components/Table';

import {Container, List, Title, InputHeader} from './styles';

function TablesGrid({isFocused}) {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [orderNo, setOrderNo] = useState('');

  async function loadOrders() {
    const response = await api.get('comandas');
    setOrders(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadOrders();
    }
  }, []);

  async function handleSubmit() {
    dispatch(ordersRequest());
  }

  return (
    <Background>
      <Container>
        <Title>Comandas</Title>

        <InputHeader
          keyboardType="number-pad"
          placeholder="Digite o código da comanda"
          returnKeyType="done"
          value={orderNo}
          onChangeText={setOrderNo}
          onSubmitEditing={() => {
            console.tron.log(orderNo);
          }}
        />

        <List
          data={orders}
          keyExtractor={item => String(item.codigo_comanda)}
          renderItem={({item}) => (
            <Table
              data={item}
              onPress={() => {
                console.tron.log(item.codigo_comanda);
              }}
            />
          )}
        />
      </Container>
    </Background>
  );
}

TablesGrid.navigationOptions = {
  tabBarLabel: 'Comandas',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(TablesGrid);
