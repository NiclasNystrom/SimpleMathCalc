/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SimpleMathCalc extends Component {
  constructor(){
    super();
    this.state = {
      currentPressedVal: '?',
      sum: 0,
      operator: '',
    }
  }


  setNewPressedValue = (value) => {
    this.setState({currentPressedVal: value}, this.evalNewChar);
  }


  evalNewChar = () => {
    let nChar = this.state.currentPressedVal;
    if (this.is_Integer(nChar)) {      
        let nInt = parseInt(nChar,10);
        if (this.state.operator == '') {
            this.setState({sum: nInt});
        } else {
            let nSum = 0;
            if (this.state.operator == '+') {
                nSum = 0 + this.state.sum + nInt;
            } else if (this.state.operator == '-') {
                nSum = 0 + this.state.sum - nInt;
            } else if (this.state.operator == 'X') {
                nSum = 0 + this.state.sum * nInt;
            } else if (this.state.operator == '<') {
                nSum = 0;
            }
            this.setState({sum: nSum, operator: ''});
        }
    } else {
        this.setState({operator: nChar});
    }
  }

  is_Integer(value) {
    if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
        return true;
    } else {
        return false;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Display value={this.state.sum}></Display>
        </View>
        <View style={styles.subcontainer}>
          <Buttons setNewPressedValue={this.setNewPressedValue.bind(this)}></Buttons>
        </View>
      </View>
    );
  }
}

//let ScreenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6600FF',
  },
  subcontainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6600FF',
  },
});

AppRegistry.registerComponent('SimpleMathCalc', () => SimpleMathCalc);
