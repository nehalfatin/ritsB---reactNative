import React, {useState} from 'react'
import {View, TouchableOpacity} from 'react-native'
import Icons from '../Icons/Icons'
import { useNavigation } from '@react-navigation/native'

const IconButton=(props)=> {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity onPress={()=>navigation.navigate(props.screenName)}>
            <View >
                <Icons text={props.text} lib={props.lib} iconName={props.iconName}/>
            </View>
        </TouchableOpacity>
    )
}

export default IconButton;


//----------------------------------------------------------------------------
//DEV NOTES:
//-> Buttons on the header
//-> Takes props from HeaderBar.js in the Header folder
//-> Clickable and navigates to respective pages
//-> useNavigation gives access to navigation object
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//To DO:
//-->Does not show page indicator yet