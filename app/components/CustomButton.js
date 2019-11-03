
import PropTypes from 'prop-types';
import React from 'react';
import {Button, View} from 'react-native';
import button from '../styles/Button';

const CustomButton = (props) => {
    const {title, onPress} = props;
    return (
        <View style={button.div} >
            <Button
                title={title}
                onPress={onPress}
                color='#f57859'
            />
        </View>
    )
}

CustomButton.propTypes = {
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
};

CustomButton.defaultProps = {
    title: "",
    disabled: false,
    onPress: () => {},
};

export default CustomButton;
