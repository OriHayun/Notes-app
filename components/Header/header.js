import React from 'react';
import { Text, View } from 'react-native';

const header = (props) => {
    return (
        <View>
            <Text>
                <Text style={props.headerStyleFirst}>{props.firstWord}</Text>
                <Text style={props.headerStyleSecond}>{props.secondWord}</Text>
            </Text>
        </View>
    )
}

export default header;