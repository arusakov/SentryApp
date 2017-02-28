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

  state = {
    count: 0,
  }

  constructor(props: void , ctx: void) {
    super(props, ctx)
    getList('projects').subscribe(
      (projects) => {
        this.setState({ count: projects.length })
      },
    )
  }

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
        <Text style={styles.instructions}>
          Projects count: {this.state.count}
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
