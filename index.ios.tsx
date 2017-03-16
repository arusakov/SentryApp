import * as React from 'react'
import {
  AppRegistry,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native'

import { CENTER } from './styles'
import { getList } from './api'
import { EventCmp } from './components/EventCmp'

type LoginState = {
  count: number,
  token: string,
}

export class SentryApp extends React.Component<void, LoginState> {

  state = {
    count: 0,
    token: '',
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
        <EventCmp />
        <TextInput
          // autoFocus
          multiline
          placeholder={'Sentry API token'}
          value={this.state.token}
          style={{height: 40, fontSize: 20}}
          onChangeText={(token) => {
            this.setState({ token: token.replace(/\s/g, '') })
          }}
          />
        <Button title='Login' onPress={() => {

        }} />
        <Button title='Sentry Auth Token' onPress={() => {
          Linking.openURL('https://sentry.io/api/')
        }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // alignItems: CENTER,
    backgroundColor: '#F5FCFF',
    flex: 1,
    // justifyContent: CENTER,
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

AppRegistry.registerComponent('sentryapp', () => SentryApp)
