import AsyncStorage from '@react-native-community/async-storage';

const UTILS = {
    storeData: async (key, value) => {
        try {
            if (value && typeof value === 'object') {
                value = JSON.stringify(value);
            }
            await AsyncStorage.setItem(key, value);
        } catch (e) {
            console.log("Error in saving local data", e);
        }
    },
    getData: async (key) => {
        try {
          const value = await AsyncStorage.getItem(key)
          return UTILS.convertJSON(value);
        } catch (e) {
            console.log('Eror while fetching data from store', e);
            return null;
          // error reading value
        }
    },
    convertJSON: (value) => {
        try {
            return JSON.parse(value);
        } catch (err) {
            return value;
        }
    },
    getPropsData: (props) => {
        if (props.route && props.route.params) {
            return props.route.params;
        }
        return {};
    },
}
export default UTILS;