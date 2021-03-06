/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    RNToastAndroid,
    StoreModule
} from "react-native";
var {NativeModules}=require('react-native');
var rnToastAndroid = NativeModules.RNToastAndroid;
rnToastAndroid.show('Hello Toast of native', 0);
var storeModule = NativeModules.StoreModule;
storeModule.addUser("jjz","123456",(msg)=>{
    alert(msg);
  },(errorMsg)=>{
    alert(errorMsg)
});
//
// storeModule.login('jjz', '123456').then((map)=> {
//     alert(map['user_id']);
// }, (code, message)=> {
//     alert(message);
// });


class RNJava extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('RNJava', () => RNJava);
