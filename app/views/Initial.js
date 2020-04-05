import React, { useState } from 'react'
import { Keyboard } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';
import { StackActions } from '@react-navigation/native';


import Input from '@components/Input';
import Label from '@components/Label';
import Nav from '@components/Nav';
import styles from '@styles';
import { MSG } from '@config';
import { useEvent } from "../modules/provider";
const Initial = (props) => {
    const [userName, setUserName] = useState('');
    const {setUser} = useEvent();
    const next = () => {
        if (setUser && userName) {
            Keyboard.dismiss();
            setUser(userName);
            props.navigation.dispatch(
                StackActions.replace('eventList')
            );
        }
    }
    return (
        <Container>
            <Nav title={MSG.welScr} isOnlyTitle={true}/>
            <Content contentContainerStyle={styles.container}>
                <Label style={styles.name}>{MSG.welUser}</Label>
                <Input autoFocus={true} onChangeText={(value) => setUserName(value)}/>
                <Button disabled={userName ? false : true} style={[styles['ini.btn'], (!userName? styles.disable: null)]} onPress={() => next()}>
                    <Text style={styles.btnText}>{MSG.next}</Text>
                </Button>
            </Content>
      </Container>
    )
}

export default Initial;
