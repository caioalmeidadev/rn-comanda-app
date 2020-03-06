import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.Text`
  margin: 30px 0px;
  padding: 5px;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;

export const OrderList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    marginHorizontal: 30,
  },
})``;
