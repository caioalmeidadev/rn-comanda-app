import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';

import api from './../../services/api';
import {ordersRequest} from './../../store/modules/orders/actions';

import Background from '../../components/Background';
import Table from '../../components/Table';

import {Container, List, Title, InputHeader} from './styles';

function TablesGrid({navigation, isFocused}) {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState(null);
  const [orderNo, setOrderNo] = useState('');
  const [refresh, setRefresh] = useState(false);

  async function loadOrders() {
    const response = await api.get('comandas');
    setOrders(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadOrders();
    }
  }, []);

  async function handleRefresh() {
    setRefresh(true);
    await loadOrders();
    setRefresh(false);
  }

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
          keyExtractor={item => String(item.codigoComanda)}
          refreshing={refresh}
          onRefresh={handleRefresh}
          renderItem={({item}) => (
            <Table
              data={item}
              onSelect={() => {
                navigation.navigate('Order', {orderId: item.codigoComanda});
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
