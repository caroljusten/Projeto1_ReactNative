//classes n são mais usadas

import React, { Component } from 'react';
import { Text, TouchableOpacity, View} from 'react-native';

const frases = [
  'Bom dia',
  'Boa tarde',
  'Boa noite',
]

class FrasesAleatorias extends Component {
  constructor(){
    super();
    this.state = {
      frase: 'Bom dia',
    }
  }
  trocarFrase = () => this.setState({ frase: frases[Math.floor(Math.random() * frases.length)]})
  render() {
    return (
      <View>
        <Text style={{ fontSize: 50 }}>{this.state.frase}</Text>
        <TouchableOpacity onPress={() => this.trocarFrase()}>
          <Text style={{ fontSize: 20 }}>Pressionar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class App extends Component {
  render() {
    return (
      <FrasesAleatorias/>
    )
  }
}

export default App;