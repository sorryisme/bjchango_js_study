import React, { useState } from 'react';
import { Text, Card, CardItem, Content, Body, Input, Item, Label, Button } from 'native-base'; 
import { Alert, TouchableOpacity, StyleSheet} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const StockScreen = (props) => {
    // const { scanner } = props;
    // console.log(scanner);
    // console.log(this);
    const [product,setProduct] = useState({
        model:'',
        lot:'',
        order:'',
        size:'',
        cnt:''
    })
    const onSuccess = e => {
        console.log(e.data);
        const [ model, lot, order, size, cnt ] = e.data.split("/");

        // setProduct({
        //     ...product,
        //     model : model,
        //     lot : lot,
        //     order : order,
        //     size : size,
        //     cnt : cnt,
        // })
        // console.log(product);   
        // console.log(`model : ${model}, lot : ${lot}, order : ${order}, size : ${size}, cnt : ${cnt}` );
    }

    return (
        <Content>
            <Card>
                <CardItem header>
                    <Text>반장창고 재고관리</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <QRCodeScanner 
                            onRead={onSuccess} 
                            reactivate={true}
                            reactivateTimeout={1}
                            flashMode={RNCamera.Constants.FlashMode.off}
                                bottomContent = {
                                    <TouchableOpacity style={styles.buttonTouchable}>
                                    {/* <Text style={styles.buttonText}>OK</Text> */}
                                    </TouchableOpacity>
                                }           
                        />
                    </Body>
                </CardItem>

                <CardItem style={{ justifyContent: 'center' }}>
                    <Button blockon onPress={() => Alert.alert('test') }>
                    <Text>QR 코드 </Text>
                    </Button>
                </CardItem>
            </Card>
        </Content>
    );
} 
const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
      padding: 16
    }
  });
export default StockScreen;




