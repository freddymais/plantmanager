import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { SafeAreaView, View, Text, TextInput, KeyboardAvoidingView, Platform, SafeAreaViewBase, ViewComponent, } from 'react-native'
import Button from '../components/Button'

import styles from '../styles/confirmation'

export default function Confirmation() {
  const navigation = useNavigation()


  function handleMoveOn() {
    navigation.navigate('PlantSelect')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😎
        </Text>

        <Text style={styles.title}>
          Prontinho!
        </Text>

        <Text style={styles.subTitle}>
          Agora vamos começar a cuidas das suas
          plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button title="Confirmar" onPress={handleMoveOn} />
        </View>
      </View>

    </SafeAreaView>
  )
}