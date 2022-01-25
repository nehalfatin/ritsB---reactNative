import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Post from '../../Posts/Post'
import { useWindowDimensions } from 'react-native'

import Header from '../../Header/HeaderBar'

const MomentPage = () => {
    const window = useWindowDimensions();
    return (
        <SafeAreaView style={{height:window.height}}>
            <Header/>
            <ScrollView style={{backgroundColor:'#FFFFFF'}}> 
            <Post/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MomentPage


//----------------------------------------------------------------------------
//DEV NOTES:
//-> SafeAreaView used for ios
//-> useWindowDimensions used to get height of screen or else bottom navigation
//   appears in ScrollView
//-> Header outside ScrollView so it does not move
//-> ScrollView for phones
//-> Displays content from Post.js in Post directory
//----------------------------------------------------------------------------