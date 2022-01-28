import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useWindowDimensions, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const PostPage = () => {
    const window = useWindowDimensions();
    return (
        <SafeAreaView style={{height:window.height}}>
            <ScrollView style={{backgroundColor:'#FFFFFF'}}> 
            <Text>You are at post page</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PostPage