import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class JokeButton extends React.Component{
  
  constructor(props){
    super(props)
    this.state={setting_up:false,text:'tap for a joke!', punchline:''}
  };

  telljoke = () => {
    if(!this.state.setting_up){
      fetch(
        'http://andrewwichmann.com:8090'
      )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          text:responseJson.setup,
          punchline:responseJson.punchline
        })
      })
      this.state.setting_up = true     
  } else{
    this.setState({
      text:this.state.punchline
    })
    this.state.setting_up = false
  }
}

  render(){
    return(
      <Button onPress={this.telljoke} title={this.state.text}></Button>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <JokeButton></JokeButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
