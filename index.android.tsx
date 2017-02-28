import * as React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { CENTER } from './styles'
import { getList } from './api'

export class SentryApp extends React.Component<void, { count: number }> {

  constructor(props: void , ctx: void) {
    super(props, ctx)

    getList('projects')
  }

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
