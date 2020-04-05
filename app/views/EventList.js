import React, { useState } from 'react'
import { Container, Content} from 'native-base';
import { FlatList } from 'react-native';

import {Drawer, Nav, GridView, ListView} from '@components';
import styles from '@styles';
import { MSG } from '@config';
import { useEvent } from "../modules/provider";

const EventList = (props) => {
  const {state} = useEvent();
  const productList = state.list
  const [mode, setMode] = useState('list');
  const [_drawer, setDrawerRef] = useState();
  const redirect = (value) => {
    props.navigation.navigate('event', { data: value });
  }
  const renderItem = (value) => {
    if (mode === 'grid') {
      return (
        <GridView value={value} redirect={redirect.bind(this)}/>
      );
    }
    return (
      <ListView redirect={redirect.bind(this)} value={value}/>
    );
    
  }
  const getKey = (value, index) => {
    return `${value.v_id}_${index.toString()}`;
  }
  const closeControlPanel = () => {
    if (_drawer) {
      _drawer.close();
    }
  }
  const openControlPanel = () => {
    _drawer.open();
  }
  const setRef = (ref) => {
    setDrawerRef(ref)
  }
  return (
    <Drawer
      setRef={setRef.bind(this)}
      closeControlPanel={closeControlPanel.bind(this)}
      {...props}
    >
      <Container> 
        <Nav
          title={MSG.homeMsg}
          openSidePane={() => openControlPanel()}
          listClick={() => setMode(mode === 'list' ? 'grid' : 'list')}
          listMode={mode}
        />
        <Content contentContainerStyle={styles.container}>
          <FlatList
            data={productList}
            style={[styles.list]}
            contentContainerStyle={styles.listContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => renderItem(item, index)}
            keyExtractor={(item, index) => getKey(item, index)}
          />
        </Content>
      </Container>
    </Drawer>
  )
}

export default EventList
