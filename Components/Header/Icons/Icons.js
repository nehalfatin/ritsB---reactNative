import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import styles from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(far,fas);

const Icons = (props) => {
       
    return (
        <View style = {styles.container}>
            <View>
                <ImageBackground 
                    style = {styles.image}
                    source={require('../../../assets/Images/orange_logo_bg.png')}>
                <FontAwesomeIcon icon={[props.lib,props.iconName]} color="white" size={22.5} style={styles.icon}/>
                </ImageBackground>
            </View>
            <Text style={styles.text}>
                {props.text}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 2, width: 50, backgroundColor: 'red', top:2.5}} />
            </View>
        </View>
    )
}

export default Icons;


//----------------------------------------------------------------------------
//Dev Notes:
//ImageBackground used for the header image
//FontAwesomeIcon dependencies installed 
//FontAwesomeIcon icon uses the library (far, fas) and then the icon name
//Takes props from IconButton.js in the HeaderButtons folder

//Uses styles from styles in same directory
//----------------------------------------------------------------------------