import React from 'react';
import { View, Text } from 'react-native';
import Style from '../../styles/home'

export default class Home extends React.Component {
    render() {
        return (
            <View style={Style.main}>
                <Text>Hello World</Text>
            </View>
        );
    }
}