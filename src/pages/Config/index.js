import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  setHost,
  configReset,
  configRequest,
} from '../../store/modules/config/actions';
import Background from './../../components/Background';
import {
  Container,
  InputConfig,
  LoginPage,
  SubmitButton,
  SyncButton,
} from './styles';

export default function Config({navigation}) {
  const dispatch = useDispatch();
  const host = useSelector(state => state.config.host);
  const [hostname, setHostname] = useState(host || '');
  function handleHostConfig() {
    if (!hostname) {
      Alert.alert('Atenção', 'O endereço do servidor parece ser inválido.');
      return;
    }
    dispatch(setHost(hostname));
  }

  function handleReset() {
    dispatch(configReset());
  }

  function handleSync() {
    dispatch(configRequest());
  }

  return (
    <Background>
      <Container>
        <InputConfig
          icon="send"
          value={hostname}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="IP do Servidor"
          returnKeyType="done"
          onChangeText={setHostname}
        />
        <SubmitButton onPress={handleHostConfig}>Salvar</SubmitButton>

        <SyncButton onPress={handleSync}>Carregar Configurações</SyncButton>
        <SyncButton onPress={handleReset}>Apagar Configurações</SyncButton>

        <LoginPage onPress={() => navigation.navigate('Login')}>
          Retornar ao Login
        </LoginPage>
      </Container>
    </Background>
  );
}

Config.navigationOptions = {
  tabBarLabel: 'Configurações',
  tabBarIcon: ({tintColor}) => (
    <Icon name="settings" size={20} color={tintColor} />
  ),
};
