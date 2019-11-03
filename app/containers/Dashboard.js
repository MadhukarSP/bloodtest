import React, {Component} from 'react';
import {Alert, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import container from '../styles/Container';
import text from '../styles/Text';
import {BUTTON_NAME, HEADER} from '../utilities/Constants';

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