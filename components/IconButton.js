import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const IconButton = ({icon, color, onTap}) => {
    return (
        <Pressable onPress={onTap} style={({pressed}) => pressed && styles.pressed}>
            <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    }
})

export default IconButton;
