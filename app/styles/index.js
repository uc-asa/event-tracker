import { StyleSheet } from 'react-native'
import { THEME } from '../config'

const styles = StyleSheet.create({
    // Global
    txtWhite: {
        color: '#fff',
    },
    input: {
        height: 'auto',
        padding: 10,
        borderWidth: 0,
        width:'100%',
        paddingHorizontal: 17,
        fontSize: 16,
        fontWeight: '700',
        color: THEME.inputTxt,
        marginBottom: 0,
        marginTop: 0,
    },
    inputView: {
        width:'90%',
        borderWidth:1,
        borderColor: THEME.inputBorder,
        borderRadius: 4,
        padding:0,
        height: 'auto',
    },
    full: {
        width: '100%',
        height:'100%',
    },
    fullWidth: {
        width: '100%',
    },
    container: {
        alignItems: 'center',
        marginTop: 0,
        paddingBottom: 30,
    },
    disable: {
        opacity: 0.5,
    },
    npT: {
        paddingTop: 0,
    },
    list: {
        width: '100%',
        paddingTop: 18,
    },
    listContainer: {
        paddingHorizontal: 18,
    },
    location: {
        color: THEME.locationColor,
        marginTop: 2,
        marginRight: 8,
    },
    payType: {
        fontSize: 13,
        paddingHorizontal: 8,
        paddingVertical: 3,
        marginTop: 10,
        marginBottom: 4,
        borderRadius: 2,
        fontSize: 12,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    payFree: {
        backgroundColor: THEME['success.bg'],
        color: THEME['success.txt'],
    },
    payPaid: {
        backgroundColor: THEME['info.bg'],
        color: THEME['info.txt'],
    },

    // Initial 
    name: {
        fontWeight: 'bold',
        color: THEME['name.txt'],
        marginTop: 20,
        fontSize: 17,
        width: '90%',
        marginBottom: 8,
    },
    fullWidth: {
        width: '100%',
    },
    btnView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
    },
    'ini.btn': {
        backgroundColor: THEME['btn.bg'],
        marginTop: 100,
        minWidth: 100,
        height: 40,
        borderRadius:2,
        marginTop: 20,
        justifyContent: 'center',
    },

    // Event List
    'ev.card': {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: THEME['card.br.clr'],
        overflow: 'hidden',
        marginBottom: 12,
    },
    'ev.grid.img': {
        height: 200,
        width: null,
        flex: 1,
    },
    'ev.list.img': {
        backgroundColor: THEME['img.bg'],
        height: 130,
        width: 175,
    },
    'ev.name': {
        fontSize: 18,
    },
    'ev.body.grid': {
        padding: 8,
    },
    'ev.body.list': {
        paddingLeft: 18
    },
    'ev.shortTitle': {
        marginTop: 15, fontSize: 18
    },

    // Event details
    'ev.content': {
        flexDirection: 'row',
    },
    'ev.item.right': {
        width: '50%',
        height: 'auto',
        justifyContent: 'center',
        marginVertical: 5,
    },
    'ev.item.left': {
        height: 'auto',
        marginVertical: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '35%',
        marginRight: 20,
    },
    'ev.item.value': {
        fontSize: 17,
        color: THEME['item.value.clr'],
        marginTop: -2,
    },
    'ev.item.heading': {
        fontSize: 17,
        color: THEME['item.head.clr'],
        fontWeight: 'bold',
    },
    'ev.item.divider': {
        fontSize: 17,
        color: THEME['name.txt'],
        fontWeight: 'bold',
    },
    'ev.imgView': {
        marginBottom: 60,
        width: '100%',
        height: 240,
        backgroundColor: 'red',
    },
    'ev.details.shortTitle' : {
        textAlign: 'center',
        backgroundColor: THEME['success.bg'],
        color: THEME['success.txt'],
        padding: 7,
        fontWeight: 'bold',
        fontSize: 20,
    },
    'ev.details.link': {
        color: THEME.linkColor,
        fontSize: 17,
        marginTop: -2,
    },
    'ev.details.btnAdd': {
        backgroundColor: THEME['btn.bg'],
        marginTop: 20,
        minWidth: 100,
        height: 40,
        borderRadius:2,
        marginTop: 20,
        justifyContent: 'center',
    },
    'btnText': {
        fontWeight: 'bold',
        fontSize: 15,
        textTransform: 'capitalize',
    },

    // Side pane
    'sp.card': {
        shadowRadius: 0,
        elevation: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 0.5,
        paddingTop: 13,
        paddingBottom: 16,
        marginBottom: 0,
    },
    'sp.img': {
        marginRight: 20,
        backgroundColor: THEME['img.bg'],
        height: 100,
        width: 130,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: THEME['sp.img.br'],
    },
    'sp.header.txt': {
        fontWeight: 'bold',
        color: THEME['sp.header.txt'],
        fontSize: 18,
    },
    'sp.header': {
        backgroundColor: THEME['sp.header.bg'],
        paddingHorizontal: 20,
        paddingVertical: 14,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    'sp.body': {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    'sp.btn.del': {
        alignSelf: 'flex-end',
        paddingRight: 0,
    },
    'sp.del.txt': {
        fontSize: 30,
        color: THEME['sp.del.icon'],
        marginLeft: 0,
        marginRight: 0,
    },
    'sp.title': {
        marginTop: 3,
        fontSize: 18,
    },

    // Nav bar 
    'nav.leftView': {
        flexDirection: 'row',
        flex: 0,
        paddingHorizontal: 8,
    },
    'nav.rightView': {
        alignItems: 'center',
        flexDirection: 'row',
    }
})
export default styles;
  