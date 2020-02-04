import styled from 'styled-components/native';
import Input from './../../components/Input';
export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 10,
  },
})``;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NovaComanda = styled(Input)`
  margin: 20px;
  flex: 1;
`;

export const Camera = styled.TouchableOpacity`
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;
