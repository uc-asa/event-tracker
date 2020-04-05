import { Platform } from 'react-native'
import { MSG, KEY } from './constants';
import UTILS from './utils';
const THEME = {
    isIos: Platform.OS === 'ios',
    drawerStyles: {
        drawer: {shadowColor: '#000', shadowOpacity: 0, shadowRadius: 3},
        main: {paddingLeft: 3},
    },
    // All color config
    'bg.black': '#000',
    inputBorder: '#dadce0',
    inputTxt: '#202124',
    linkColor: '#65a8ff',
    'btn.bg': '#2678e4',
    'success.txt': '#e6f4e8',
    'success.bg': '#7fc688',
    'info.txt': '#6eaff7',
    'info.bg': '#cee3fb',
    'img.bg': '#3dadce',
    'locationColor': '#787878',
    'name.txt': '#333',
    'card.br.clr': '#999',
    'item.head.clr': '#444',
    'item.value.clr': '#888',
    // Side pane
    'sp.img.br': '#ccc',
    'sp.header.txt': '#4d4cb6',
    'sp.header.bg': '#e3e2f4',
    'sp.del.icon': '#c9ced4',
}
export {
    MSG,
    UTILS,
    KEY,
    THEME
};