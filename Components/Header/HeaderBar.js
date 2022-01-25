import React from 'react'
import { View, Image} from 'react-native'

import styles from './styles';
import IconButton from './HeaderButtons/IconButton';
import HeaderButton from './HeaderButtons/HeaderButton';

const Header = () => {
    return (    
        <View style= {styles.container}>
                <Image 
                    class='img-responsive' 
                    style= {styles.image} source ={require('../../assets/Images/header_bg.png')}/>
            
            <View style={styles.componentcontainer}>
                <HeaderButton style={styles.button}/>
                <View style={styles.iconcontainer}>
                    <IconButton 
                        text="Moment" lib="far" 
                        iconName="clock" screenName="MomentPage"/>
                    <IconButton 
                        text="My Post" lib="fas" 
                        iconName="rss" screenName="MyPostPage" />
                    <IconButton 
                        text="My Videos" lib="fas" 
                        iconName="video" screenName="MyVideosPage"/>
                </View>                
            </View>
        </View>

    )
}

export default Header;


//----------------------------------------------------------------------------
//DEV NOTES:
//-> Header bar containing the logo and buttons
//-> IconButton passing props into IconButton.js in HeaderButtons directory

//-> Uses styles from the same directory
//----------------------------------------------------------------------------