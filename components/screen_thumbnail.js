import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, WebView, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
        width: width,
        height: ( width * 1080 )/ 1920
    },
    back: {
        width: width,
        height: ( width * 1080 )/ 1920,
        zIndex: 0
    },
    front: {
        position: 'absolute',
        top:0,
        left:0,
        width: width,
        height: ( width * 1080 )/ 1920,
        zIndex: 1
    }
});

export default ScreenThumbnail = (props) => {
        return (
          <View style={styles.wrapper}>
              <WebView
                style={styles.back}
                source={{uri: props.screen.website}}
              />
              <TouchableOpacity style={styles.front} onPress={props.onPress}></TouchableOpacity>
          </View>
        )
    }
