import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { COLOR_GRAY, COLOR_RED, COLOR_WHITE } from '../styles'

export class EventCmp extends React.Component<void, void> {
  render() {
    return (
      <View style={{
        borderBottomColor: COLOR_GRAY,
        borderBottomWidth: 1,
        height: 50,
        justifyContent: 'space-between',
        paddingBottom: 4,
        paddingTop: 6,
      }}>
        <View style={{ flexDirection: 'row'}}>
          <Text style={{ paddingHorizontal: 4, flexGrow: 0, backgroundColor: COLOR_RED, color: COLOR_WHITE }}>Error</Text>
        </View>
        <Text>Useq old UpdateEventNew</Text>
      </View>
    )
  }
}
