import React from 'react';
import Drawer from 'react-native-drawer';


import SidePane from './SidePane';
import { THEME } from '@config';



const CustomDrawer = (props) => {
    const closeControlPanel = () => {
        props.closeControlPanel && props.closeControlPanel();
    }
    const setRef = (ref) => {
       props.setRef && props.setRef(ref);
    }
    return (
        <Drawer
            ref={(ref) => setRef(ref)}
            type={'overlay'}
            content={<SidePane closeDrawer={() => closeControlPanel()} navigation={props.navigation}/>}
            tapToClose={true}
            closedDrawerOffset={-3}
            openDrawerOffset={0.15}
            panCloseMask={0.2}
            panOpenMask={1}
            negotiatePan={true}
            captureGestures={true}
            styles={THEME.drawerStyles}
            tweenHandler={(ratio) => ({
                main: { opacity:(2-ratio)/2 }
            })}
        >
            {props.children}
        </Drawer>
    );
}
export default CustomDrawer;
