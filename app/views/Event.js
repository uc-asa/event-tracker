import React, { useState } from 'react'
import { Container, Content, Button, Text } from 'native-base';
import { View, Image, Linking } from 'react-native';
import { has } from 'lodash';

import {Label, Nav, Drawer} from '@components';
import styles from '@styles';
import { MSG, UTILS } from '@config';
import { useEvent } from "../modules/provider";

const Event = (props) => {
    const {setEvent, state} = useEvent();
    const [_drawer, setDrawerRef] = useState();
    const pData = UTILS.getPropsData(props);
    let isItemAdded = false;
    if (has(state, 'userEvents') && state.userEvents.length) {
        for (let i in state.userEvents) {
            if (state.userEvents[i].ev_id === pData.data.ev_id) {
                isItemAdded = true;
            }
        }
    }
    const addToList = (eventData) => {
        if (eventData.ev_id) {
            setEvent(eventData.ev_id);
            props.navigation && props.navigation.goBack();
        }
    }
    const getFee = (data) => {
        if (data && data.average_price) {
            return data.average_price;
        }
        return MSG['ev.free'];
    }
    const closeControlPanel = () => {
        _drawer.close();
    }
    const openControlPanel = () => {
        _drawer.open();
    }
    const setRef = (ref) => {
        setDrawerRef(ref)
    }
    const back = () => {
        props.navigation.goBack();
    }
    if (pData.data) {
        const item = pData.data;
        return (
            <Drawer
				setRef={setRef.bind(this)}
				closeControlPanel={closeControlPanel.bind(this)}
				{...props}
			>
                <Container>
                    <Nav
                        title={MSG['ev.lab.details']}
                        backPress={() => back()}
                        openSidePane={() => openControlPanel()}
                    />
                    <Content contentContainerStyle={[styles.container]}>
                        <View style={styles['ev.imgView']}>
                            <Image
                                resizeMode={'cover'}
                                source={{uri: item.image}}
                                style={styles.full}
                            />
                            <Label style={styles['ev.details.shortTitle']}>{item.short_title}</Label>
                        </View>
                        <RenderItem index={MSG['ev.location']} value={item.location}/>
                        <RenderItem index={MSG['ev.name']} value={item.name}/>
                        <RenderItem index={MSG['ev.short_name']} value={item.short_title}/>
                        <RenderItem
                            style={styles['ev.details.link']}
                            index={MSG['ev.links']}
                            value={item.url}
                            onPress={() => Linking.openURL(item.url)}
                        />
                        <RenderItem index={MSG['ev.date']} value={item.date_utc}/>
                        <RenderItem index={MSG['ev.price']} value={getFee(item.stats)}/>
                        <Button disabled={isItemAdded} style={[styles['ev.details.btnAdd'], (isItemAdded? styles.disable: null)]} primary onPress={() =>addToList(item)}>
                            <Text style={styles.btnText}>{ MSG[isItemAdded  ? 'ev.btn.added' : 'ev.btn.add'] }</Text>
                        </Button>
                    </Content>
                </Container>
            </Drawer>
        )
    }
}

const RenderItem = (props) => {
    if (props) {
        return (
            <View style={styles['ev.content']}>
                <View style={styles['ev.item.left']}>
                    <Label style={styles['ev.item.heading']}>{props.index}</Label><Label style={styles['ev.item.divider']}>:</Label>
                </View>
                <View style={styles['ev.item.right']}>
                    <Label style={styles['ev.item.value']} {...props}>{props.value}</Label>
                </View>
            </View>
        )
    }
    return null;
}

export default Event;
