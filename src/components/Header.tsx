import React from 'react'
import { Text, View, Image } from 'react-native'

import styles from '../styles/header'
import userImg from '../assets/primefox.jpg'

export function Header() {


   return (
      <View style={styles.container}>
         <View>
            <Text style={styles.greeting}>Olá,</Text>
            <Text style={styles.userName}>Freddymais</Text>
         </View>

         <Image source={userImg} style={styles.image} />



      </View>
   )
}