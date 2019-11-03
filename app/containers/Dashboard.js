import React, { Component } from 'react';
import { Text, View, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import {BUTTON_NAME, HEADER} from '../utilities/Constants';
import container from '../styles/Container';
import text from '../styles/Text';

export default class Dashboard extends Component {

    displayBloodTestList = () => {
        Alert.alert('displayBloodTestList')
    }

    displayBloodTestResult = () => {
        Alert.alert('displayBloodTestResult')
    }

    render() {
        return (
            <View style={container.outer}>
            <View style={container.header}>
                <Text style={[text.white, text.header]}>{HEADER.DASHBOARD}</Text>
            </View>
            <View style={container.body}>
                <CustomButton
                    title={BUTTON_NAME.BLOOD_TEST_LIST}
                    onPress={this.displayBloodTestList}
                />
                <CustomButton
                    title={BUTTON_NAME.BLOOD_TEST_RESULT}
                    onPress={this.displayBloodTestResult}
                />
            </View>
            </View>
        );
    }
}