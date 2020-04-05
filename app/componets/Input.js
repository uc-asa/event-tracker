import React, {useState} from 'react';
import { TextInput, View } from 'react-native';

import { THEME } from '@config';
import styles from '@styles';

const Input = (props) => {
    const [style, setStyle] = useState(null); 
    const onFocus = () => {
		setStyle({ borderColor:  THEME.inputBorder });
    }
    return (
        <View style={styles.inputView}>
            <TextInput
                onFocus={onFocus.bind(this)}
                onBlur={() => setStyle( style )}
                returnKeyType={'done'}
                {...props}
                style={[styles.input, props.style, style]}
                blurOnSubmit={true}
            />
        </View>
    );
}
export default Input;