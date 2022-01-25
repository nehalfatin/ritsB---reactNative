import {StyleSheet, Dimensions} from 'react-native'

const styles=StyleSheet.create({
    logo:{
        height:Dimensions.get('window').height/12.5,
        width:180,
        resizeMode: 'contain',
        top: 6,
        left:5
    },
})

export default styles;