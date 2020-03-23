import React, {useState, useRef} from 'react';
import {RNCamera} from 'react-native-camera';
import Background from './../../../components/Background';

import {
  Container,
  Scanner,
  SnapButton,
  SnapButtonText,
  InputHeader,
  SelectButton,
  ButtonText,
} from './styles';

export default function ScanCode() {
  const cameraRef = useRef();
  const [orderId, setOrderId] = useState('');
  async function takePic() {
    if (cameraRef) {
      const data = await cameraRef.takePictureAsync({
        quality: 0.5,
        base64: true,
      });
      console.tron.log(data.uri);
    }
  }

  return (
    <Background>
      <Container>
        <Scanner
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          barCodeTypes={[RNCamera.Constants.BarCodeType.ean13]}
          onBarCodeRead={data => {
            console.tron.log(data);
          }}>
          <SnapButton>
            <SnapButtonText onPress={() => takePic()}>
              SnapButton
            </SnapButtonText>
          </SnapButton>
        </Scanner>

        <InputHeader
          keyboardType="number-pad"
          placeholder="Digite o código da comanda"
          returnKeyType="done"
          value={orderId}
          onChangeText={setOrderId}
          onSubmitEditing={() => {
            console.tron.log(orderId);
          }}
        />
        <ButtonContainer>
          <SelectButton onPress={() => {}}>
            <ButtonText>OK</ButtonText>
          </SelectButton>
          <SelectButton onPress={() => {}}>
            <ButtonText>Scanear</ButtonText>
          </SelectButton>
        </ButtonContainer>
      </Container>
    </Background>
  );
}
