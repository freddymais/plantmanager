import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, View, } from 'react-native'

import { Feather } from '@expo/vector-icons'
import wateringImg from '../assets/watering.png'
import styles from '../styles/welcome';
import { useNavigation } from '@react-navigation/core';


export default function Welcome() {
  const [visible, setVisible] = useState(true);
  const navigation = useNavigation()

  function handleStart() {
    navigation.navigate('UserIdentification')
  }

  function handleVisible() {
    setVisible(!visible)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer} >
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas {'\n'}
          de forma facil.
      </Text>

        {
          visible &&
          <Image
            source={wateringImg}
            style={styles.image}
            resizeMode="contain"
          />
        }

        <Text style={styles.subTitle}>
          Nao esqueça mais de regar suas plantas. {'\n'}
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={handleStart}
        >
          <Text style={styles.buttonText}  >
            <Feather
              name="chevron-right"
              style={styles.buttonIcon} />
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  );
}

