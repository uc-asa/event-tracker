import React from 'react';
import {Image} from 'react-native'
import { Card, CardItem, Body } from 'native-base';

import styles from '@styles';
import { MSG } from '@config';
import {Label} from '@components';

export default GridView = (props) => {
    const redirect = () => {
        props.redirect && props.redirect(props.value);
    }
    const { value = null} = props;
    if (value) {
        const isPaid = value.stats && value.stats.average_price;
        return(
            <Card onPress={() => redirect(value)} style={styles['ev.card']}>
                <CardItem cardBody button onPress={() => redirect(value )}>
                <Image resizeMode={'cover'} source={{uri: value.image}} style={styles['ev.grid.img']}/>
                </CardItem>
                <CardItem button onPress={() => redirect(value )}>
                <Body style={styles['ev.body.grid']}>
                    <Label numberOfLines={1} style={styles['ev.name']}>{value.name}</Label>
                    <Label numberOfLines={1} style={styles.location}>{value.location}</Label>
                    <Label style={[styles.payType, (styles[isPaid ? 'payPaid' : 'payFree'])]}> {isPaid ? MSG['en.paid'] : 'Free'} </Label>
                </Body>
                </CardItem>
            </Card>
        );  
    }
    return null;
}