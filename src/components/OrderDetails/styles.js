import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #7159c1;
  display: flex;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Footer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Description = styled.Text`
  font-size: 30px;
  color: #fff;
`;
export const Qtde = styled.Text`
  font-size: 20px;
  color: #fff;
`;
export const Obs = styled.Text`
  font-size: 15px;
  color: #fff;
`;
export const Value = styled.Text`
  font-size: 20px;
  color: #fff;
`;
export const Total = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #fff;
`;

export const CancelButton = styled.TouchableOpacity``;
