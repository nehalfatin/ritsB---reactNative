import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function ViewsButton() {
  return (
    <TouchableOpacity >
    <View style={styles.buttonContainer}>
        <FontAwesomeIcon icon={'fas','eye'} color="#AFB4BD" size={15} style={styles.icon}/>
        <Text style={styles.buttonText}>Views</Text>
    </View>
    </TouchableOpacity>
  )
}


//----------------------------------------------------------------------------
//DEV NOTES:
//-> Gets Icon from FontAwesomeIcon free-solid library {fas}
//-> Clickable but no functionality yet

//-> Uses shared stylesheet from same directory
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//TO DO:
//-> Add functionality to retrieve viewed counter from firebase