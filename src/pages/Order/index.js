import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from './../../services/api';
import Background from './../../components/Background';
import OrderDetails from './../../components/OrderDetails';
import {Container, Header, OrderList} from './styles';

function Order({navigation}) {
  const orderId = navigation.getParam('orderId');
  const [refresh, setRefresh] = useState(false);
  const [items, setItems] = useState([]);

  async function loadItems() {
    const response = await api.get(`/comandas/${orderId}`);

    setItems(response.data);
  }

  useEffect(() => {
    loadItems();
  }, []);

  function handleRefresh() {
    setRefresh(true);
    loadItems();
    setRefresh(false);
  }

  return (
    <Background>
      <Container>
        <Header>Comanda {orderId}</Header>
        <OrderList
          data={items}
          keyExtractor={item => String(item.numeroPedido)}
          refreshing={refresh}
          onRefresh={handleRefresh}
          renderItem={({item}) => <OrderDetails data={item} />}
        />
      </Container>
    </Background>
  );
}

Order.navigationOptions = ({navigation}) => ({
  title: 'Consumo',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('TablesGrid');
      }}>
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});

export default Order;
