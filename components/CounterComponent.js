
import React, { Component } from 'react';
import Button from 'react-native-button';

import {
    Text, View, Image, Alert, Platform
} from 'react-native';

export default class CounterComponent extends Component {
    render() {
        return (
            <View>
                <Text style={{ textAlign: 'center', margin: 20, color: 'forestgreen', fontWeight: 'bold', fontSize: 30 }}>
                    Redux-Saga-App
                </Text>
                <View style={{ height: 140, margin: 100, flexDirection: 'column', justifyContent: "space-between" }}>
                    <Button
                        containerStyle={{
                            padding: 10,
                            height: 50,
                            borderRadius: 10,
                            backgroundColor: 'lightcoral'
                        }}
                        style={{ color: 'white', fontSize: 18 }}
                        onPress={() => {
                            this.props.onDecrement(1);
                        }}
                    >
                        Decrement -
                    </Button>
                    <Button
                        containerStyle={{
                            padding: 10,
                            height: 50,
                            borderRadius: 10,
                            backgroundColor: 'lightcoral'
                        }}
                        style={{ color: 'white', fontSize: 18 }}
                        onPress={() => {
                            this.props.onIncrement(1);
                        }}
                    >
                        Increment +
                    </Button>
                </View>
                <Text style={{
                    margin: 10,
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'lightcoral',

                }}
                >
                    Count:{this.props.times}
                </Text>
            </View>
        )
    }
}
