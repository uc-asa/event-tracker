import React, { useState } from 'react';
import { Container, Content, Button, Card, CardItem, Body, Icon } from 'native-base';
import { FlatList, Image, View, Alert } from 'react-native';
import { has } from 'lodash';

import {Label, PopupMenu} from '@components';
import styles from '@styles';
import { MSG } from '@config';
import { useEvent } from '../modules/provider';

const SidePane = (props) => {
    const redirect = (value) => {
        props.navigation.navigate('event', { data: value });
        props.closeDrawer && props.closeDrawer();
    }
   
    const [sort, setSort] = useState('');
    const onPress = (sortValue = '') => {
        if (sortValue === 'clear') {
            setSort('');
        } else {
            setSort(sortValue);
        }
    }
    const { state, removeEvent } = useEvent();
    const getEvents = () => {
        const del = (eventData) => {
            if (eventData.ev_id) {
                removeEvent(eventData.ev_id);
            }
            props.closeDrawer && props.closeDrawer();
        }
        const removeFromList = (eventData) => {
            Alert.alert(
                '',
                MSG['sp.del.confirm'],
                [
                  {text: 'OK', onPress: () => del(eventData)},
                  {text: 'Cancel', onPress: () => null, style: 'cancel'},
                ],
                { cancelable: false }
            )
            
        }
        const renderItem = (value) => {
            const isPaid = value.stats && value.stats.average_price;
            return (
                <Card style={[styles['sp.card'], { paddingRight: 12, paddingLeft: 10 }]}>
                    <CardItem button cardBody onPress={() => redirect(value )}>
                        <Image
                            resizeMode={'cover'}
                            source={{uri: value.image}}
                            style={styles['sp.img']}
                        />
                        <Body>
                            <Label style={styles['sp.title']} numberOfLines={1}>{value.short_title}</Label>
                            <Label style={styles.location} numberOfLines={1}>{value.location}</Label>
                            <View style={styles['sp.body']}>
                            <Label style={[styles.payType, (styles[isPaid ? 'payPaid' : 'payFree'])]}> {isPaid ? MSG['en.paid'] : 'Free'} </Label>
                                <Button transparent onPress={() => removeFromList(value)} style={styles['sp.btn.del']}>
                                    <Icon style={styles['sp.del.txt']} type='MaterialIcons' name='delete'/>
                                </Button>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
            )
        }
        const getKey = (value, index) => {
            return `${value.v_id}_${index.toString()}`;
        }
        if (has(state, 'userEvents') && state.userEvents.length > 0) {
            const list = state.userEvents;
            const d = list.sort((a, b) => {
                if (a[sort] < b[sort]) {
                    return -1;
                }
                if (b[sort] < a[sort]) {
                    return 1;
                }
                return 0;
            })
            return (
                <FlatList
                    data={list}
                    style={[styles.list, styles.npT]}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => (
                        <ListHeader
                            onPress={onPress.bind(this)}
                            sort={sort}
                        />
                    )}
                    renderItem={({ item, index }) => renderItem(item, index)}
                    keyExtractor={(item, index) => getKey(item, index)}
                />
            );
        }
        return (
            <Label style={[styles['sp.header'], styles['sp.header.txt']]}>{MSG['sp.noEvent']}</Label>
        );
    }
    return(
        <Container>
            <Content contentContainerStyle={[styles.container]}>
                {getEvents()}
            </Content>
        </Container>
    );
}
const ListHeader = (props) => {
    const opt = [
        {
            name: 'Name',
            value: 'short_title',
        },
        {
            name: 'Location',
            value: 'location',
        }
    ];
    if (props.sort) {
        opt.push(
            {
                name: 'Clear',
                value: 'clear',
            }
        );
    }
    return (
        <View style={[styles['sp.header']]}>
            <Label style={styles['sp.header.txt']}>{MSG['sp.tackEvent']}</Label>
            <PopupMenu
                options={opt}
                {...props}
            />
        </View>
    );
}
export default SidePane;