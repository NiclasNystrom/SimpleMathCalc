import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions, TouchableOpacity,
} from 'react-native';


export default class Display extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={styles.display}>
                <Text style={styles.text}>{this.props.value}</Text>
            </View>
        );
    }
}


//let ScreenHeight = Dimensions.get("window").height;
//let ScreenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  display: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
  },
  text: {
      flexDirection: 'row',
      fontSize: 48,
      fontWeight: 'bold',
      color: 'black',
  }
});

AppRegistry.registerComponent('Display', () => Display);