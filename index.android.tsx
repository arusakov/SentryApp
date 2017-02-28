import * as React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export class SentryApp extends React.Component<void, void> {
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
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    )
  }
}

const STYLE_CENTER: 'center' = 'center'

const styles = StyleSheet.create({
  container: {
    alignItems: STYLE_CENTER,
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: STYLE_CENTER,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: STYLE_CENTER,
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: STYLE_CENTER,
  },
})

AppRegistry.registerComponent('SentryApp', () => SentryApp)
