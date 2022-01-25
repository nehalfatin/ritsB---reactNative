import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

export default function LikeButton() {
  return (
    <TouchableOpacity>
    <View style={styles.buttonContainer}>
        <Image style={styles.buttonImage} source={require('../../assets/Images/like.webp')}/>
        <Text style={styles.buttonText}>Like</Text>
    </View>
    </TouchableOpacity>
  )
}


//----------------------------------------------------------------------------
//DEV NOTES:
//-> ReactButton with Like icon
//-> Clickable but no functionality yet

//-> Uses shared stylesheet in the same directory
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//TO DO:
//-> ReactButton functionality:
//   React Icons visible on top of Like Button on Hover
//   React Icons sending info to firebase 