import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RNCamera} from 'react-native-camera';
import Background from '../../components/Background';
import Table from '../../components/Table';

import {Container, List, Title, NovaComanda, Header, Camera} from './styles';

const tables = ['0001', '0005', '0062', '0080'];

export default function TablesGrid() {
  const [orders, setOrders] = useState(tables);
  const [orderNo, setOrderNo] = useState('');
  const cameraRef = useRef();

  async function handleCamera() {
    const options = {quality: 0.5, base64: true};
    const data = await cameraRef.takePictureAsync(options);
    console.tron.log(data);
  }
  return (
    <Background>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        onBarCodeRead={({data}) => {
          console.tron.log(data);
        }}
      />
      <Container>
        <Title>Comandas</Title>
        <Header>
          <NovaComanda
            keyboardType="number-pad"
            placeholder="Digite o código da comanda"
            returnKeyType="done"
            value={orderNo}
            onChangeText={setOrderNo}
            onSubmitEditing={() => {
              console.tron.log(orderNo);
            }}
          />
          <Camera
            onPress={() => {
              handleCamera;
            }}>
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
