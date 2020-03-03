import React, {useRef, useEffect} from 'react';
import {RNCamera} from 'react-native-camera';
import Background from './../../../components/Background';

import {Container, Scanner, SnapButton, SnapButtonText} from './styles';

export default function ScanCode() {
  const cameraRef = useRef();
  async function takePic() {
    if (cameraRef) {
      const data = await cameraRef.takePictureAsync({
        quality: 0.5,
        base64: true,
      });
      console.tron.log(data.uri);
    }
  }

  useEffect(() => {
    takePic();
    console.tron.log(RNCamera.Constants.CameraStatus);
  }, []);
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
      </Container>
    </Background>
  );
}
