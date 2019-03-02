import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions, TouchableOpacity, TouchableHighlight
} from 'react-native';


class Button extends Component {

    constructor(props){
        super(props);
        let butTitle = this.props.title != null ? this.props.title : '?';
        this.state = {title: butTitle};
    }

    onButtonPress = () => {
        this.props.setNewPressedValue(this.state.title);
    }


    render() {
        return (
            <View style={styles.button}> 
                <TouchableHighlight onPress={this.onButtonPress}>
                    <Text style={styles.buttonText}>{this.state.title}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}


export default class Buttons extends Component {

    constructor(props) {
        super(props);
    }

    render() {
    return (
        <View style={{  flex:1, 
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start', 
                        marginBottom: 20,
                        marginLeft: 20,
                        marginRight: 20,}}>

            <View style={styles.container}>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='7'></Button>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='8'></Button>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='9'></Button>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='X'></Button>
            </View>
            <View style={styles.container}>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='4'></Button>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='5'></Button>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='6'></Button>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='-'></Button>
            </View>
            <View style={styles.container}>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='1'></Button>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='2'></Button>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='3'></Button>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='+'></Button>
            </View>
            <View style={styles.container}>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='0'></Button>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='.'></Button>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='<'></Button>
                <Button setNewPressedValue={this.props.setNewPressedValue} title='='></Button>
            </View>
        </View>
    );
    }
}


//let ScreenHeight = Dimensions.get("window").height;
//let ScreenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#6600FF',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  button: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'#33AAFF',
      borderWidth: 20,
      borderColor: '#33AAFF',
      padding: 10,
      marginHorizontal: 1,
      marginVertical: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      
  },   
  buttonText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFFFFF',
  }
});

AppRegistry.registerComponent('Buttons', () => Buttons);