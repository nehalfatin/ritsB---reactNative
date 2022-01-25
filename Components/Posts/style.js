import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        width: "96%",
        alignSelf: 'center',
        paddingTop: 25,
        backgroundColor: '#F9F9F9',
    },
    postImage: {
        width: "100%",
        height: 250,
        resizeMode: 'contain'
    },
    image: {
        borderRadius: 100,
        width: 40,
        height:40,
    },
    profileContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    textProfileContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 7.5
    },
    name: {
        fontWeight: '400',
        fontSize: 17.5
    },
    timeStamp: {
        fontSize: 12.5,
        color: '#66B8ED',
        fontWeight: '300'
    },
    title:{
        fontSize: 20,
        fontWeight: '500',
        color: '#6D6D6F',
        paddingTop: 2.5,
    },
    subTitle:{
        paddingTop: 2.5,
        color: '#6D6D6F',
        paddingBottom: 2.5
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
        paddingBottom: 5
    },
    buttonText: {
        fontSize: 10,
        paddingLeft: 3,
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',

    },
    buttonImage: {
        height: 15,
        width: 15
    }
});

export default styles;