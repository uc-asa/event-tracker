import React from 'react';
import { Header, Title, Button, Left, Body, Icon, View } from 'native-base';

import { MSG } from '@config';
import styles from '@styles';

const Nav = (props) => {
    // Left menu
    const renderLeft = () => {
        if (props.backPress || props.openSidePane) {
            return (
                <Left style={styles['nav.leftView']}>
                    {/* Back button */}
                    {props.backPress ?
                        <Button transparent onPress={() => props.backPress()}>
                            <Icon type={'MaterialIcons'} name='arrow-back' />
                        </Button>: null
                    }
                    {/* Hamburger Button */}
                    {props.openSidePane ?
                        <Button transparent onPress={() => props.openSidePane()}>
                            <Icon type={'MaterialIcons'} name='menu' />
                        </Button>: null
                    }
                </Left> 
            )
        }
    }
    // Right menu
    const renderRight = () => {
        if ( props.listClick) {
            return (
                <View style={styles['nav.rightView']}>
                    {
                        props.listClick ?
                        <Button transparent onPress={() => props.listClick()}>
                            <Icon type={'Ionicons'} style={styles.txtWhite} name={props.listMode === 'list' ? 'grid' : 'list'} />
                        </Button>: null
                    }
                </View> 
            )
        }
    }
    return (
        <Header>
            {renderLeft()}
            <Body>
                <Title>{props.title || MSG.title}</Title>
            </Body>
            {renderRight()}
        </Header>
    );
}
export default Nav;
