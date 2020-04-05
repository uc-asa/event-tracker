import React from 'react';
import {Image} from 'react-native'
import { Card, CardItem, Body, Left } from 'native-base';

import styles from '@styles';
import { MSG } from '@config';
import {Label} from '@components';

export default ListView = (props) => {
    const redirect = () => {
        props.redirect && props.redirect(props.value);
    }
    const { value = null} = props;
    if (value) {
        const isPaid = value.stats && value.stats.average_price;
        return(
            <Card style={styles['ev.card']}>
                <CardItem button cardBody onPress={() => redirect(value )}>
                    <Body style={styles['ev.body.list']}>
                        <Label numberOfLines={1} style={styles['ev.shortTitle']}>{value.short_title}</Label>
                        <Label numberOfLines={2} style={styles.location}>{value.location}</Label>
                        <Label style={[styles.payType, (styles[isPaid ? 'payPaid' : 'payFree'])]}> {isPaid ? MSG['en.paid'] : 'Free'} </Label>
                    </Body>
                    <Left>
                        <Image resizeMode={'cover'} source={{uri: value.image}} style={styles['ev.list.img']}/>
                    </Left>
                </CardItem>
            </Card>
        );  
    }
    return null;
}