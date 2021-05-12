import React from 'react'
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export default function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            {...rest}>
            <Text style={styles.buttonText} >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 10,
        // paddingHorizontal: 25
    },

    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.heading,
    }
});