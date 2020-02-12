import React, {useRef, useEffect} from 'react';
import {RNCamera} from 'react-native-camera';
import Background from './../../../components/Background';

import {Container, Scanner, SnapButton, SnapButtonText} from './styles';

export default function ScanCode() {
  const cameraRef = useRef();
  useEffect(() => {
    const takePic = async () => {
      if (cameraRef) {
        const data = await cameraRef.takePictureAsync({
          quality: 0.5,
          base64: true,
        });
        console.tron.log(data.uri);
      }
    };
    takePic();
  }, []);
  return (
    <Background>
      <Container>
        <Scanner
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          barCodeTypes={RNCamera.Constants.BarCodeType.ean13}
          onBarCodeRead={data => {
            console.tron.log(data);
          }}>
          <SnapButton>
            <SnapButtonText>SnapButton</SnapButtonText>
          </SnapButton>
        </Scanner>
      </Container>
    </Background>
  );
}
