import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container:{ 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 2,
    },
    text:{
        color: '#FFFFFF',
        fontSize: 11,
        textAlign: 'center',
        paddingTop: 2,
    },
    image:{
        height: 35,
        width : 35,
    },
    icon:{
        alignSelf:'center',
        paddingTop:5,
        top:5.5,
    }
})

export default styles;