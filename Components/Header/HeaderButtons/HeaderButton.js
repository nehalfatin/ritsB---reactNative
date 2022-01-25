import React from 'react'
import {TouchableOpacity, Image} from 'react-native'
import styles from './styles'

const HeaderButton=()=> {
    return (
        <TouchableOpacity activeOpacity = { 0.2 }  >
            <Image style={styles.logo} source={require('../../../assets/Images/rits_text.webp')}/>
        </TouchableOpacity>
    )
}

export default HeaderButton;


//----------------------------------------------------------------------------
//DEV NOTES:
//-> Rits Browser Logo on the top header

//-> Uses styles.logo from styles in same directory
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//TO DO:
//-> Clickalbe but no function yet