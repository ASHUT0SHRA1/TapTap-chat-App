import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigation from './StackNavigation'
import { UserContext } from './UserContext'

const App = () => {
  return (
    <UserContext>
      <StackNavigation/>
    </UserContext>
  )
}

export default App

const styles = StyleSheet.create({})