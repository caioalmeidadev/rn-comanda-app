import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Description,
  Value,
  Qtde,
  Obs,
  Total,
  Content,
  Header,
  Footer,
  CancelButton,
} from './styles';

export default function OrderDetails({data}) {
  return (
    <Container>
      <Header>
        <Description>{data.descricao}</Description>
        {data.cancelado === 0 && (
          <CancelButton onPress={() => {}}>
            <Icon name="remove-circle-outline" size={24} color="#FF0000" />
          </CancelButton>
        )}
      </Header>
      <Content>
        <Qtde>Qtde: {data.quantidade}</Qtde>

        <Value>Valor: {data.valor}</Value>
        <Obs>Obs.:{data.observacao}</Obs>
      </Content>
      <Footer>
        <Total>Total: {data.quantidade * data.valor}</Total>
      </Footer>
    </Container>
  );
}
