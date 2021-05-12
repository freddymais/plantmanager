import React from 'react'
import { Text, View, Image } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import styles from '../styles/enviromentButton'


interface EnviromentButtonProps extends RectButtonProps {
   title: string,
   active?: boolean,
}

export function EnviromentButton({
   title,
   active = false,
   ...rest
}: EnviromentButtonProps) {

   return (
      <RectButton
         style={[
            styles.container,
            active && styles.buttoActive
         ]}
         {...rest} >
         <Text
            style={[
               styles.text,
               active && styles.textActive
            ]}
         >
            {title}
         </Text>
      </RectButton>
   )
}