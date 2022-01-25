import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container:{
        position: 'relative',
    },
    componentcontainer:{
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent:'space-around'
    },    
    image:{
        height:Dimensions.get('window').height/10,
        width:'100%',
        resizeMode: 'cover',
    },
    iconcontainer:{
        width: '50%',
        height: '100%',
        paddingBottom: 25,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignContent:'center'    
    },
    button:{
        alignContent:'center'
    }
});

export default styles;