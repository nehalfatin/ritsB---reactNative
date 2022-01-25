import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { MomentPage, MyVideosPage, MyPostPage} from './PagesIndex'

const Stack = createNativeStackNavigator();

const NavSys = () => {
    return(
        <NavigationContainer>   
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName='MomentPage'>
                <Stack.Screen name= 'MomentPage' component = {MomentPage}/>
                <Stack.Screen name= 'MyPostPage' component={MyPostPage}/>
                <Stack.Screen name= 'MyVideosPage' component={MyVideosPage}/>
            </Stack.Navigator>
      </NavigationContainer>  
    )
}

export default NavSys;

//----------------------------------------------------------------------------
//DEV NOTES:
//-> Imports the pages from PagesIndex.js in the same directory
//-> Navigator with respective pages and their routes
//-> Top header is not shown
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//TO DO:
//-> Potential fix for RITS header padding if default header is shown