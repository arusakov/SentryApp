import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { CENTER } from './styles'

export class SentryApp extends Component<void, void> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: CENTER,
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: CENTER,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: CENTER,
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: CENTER,
  },
})

AppRegistry.registerComponent('SentryApp', () => SentryApp)
