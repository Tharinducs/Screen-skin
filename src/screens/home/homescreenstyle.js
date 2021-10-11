import { StyleSheet } from 'react-native';
import normalize from "../../utils/fontsize"

const styles = StyleSheet.create({
    patientView: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#000000',
    },
    imageContainer: {
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        height: '20%',
        paddingBottom: '10%',
        paddingTop: '20%'
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
    },
    textContainer: {
        flex: 1,
        height: '20%',
        paddingTop: 30,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#B2BEB5',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: normalize(13),
        paddingLeft: 10,
        paddingRight: 10,
        letterSpacing: 1
    },
    clickButton: {
        backgroundColor: '#B2BEB5',
        color:'#ffffff',
        width: 250,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 25,
        borderRadius: 8,
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'center',
    },
    largeClickButton: {
        backgroundColor: '#B2BEB5',
        width: 250,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center',
        marginTop: 25,
        borderRadius: 8,
        justifyContent:'space-around',
        flexDirection:'row',
    },
    clickButtonText: {
        fontWeight: '700',
        color:'#ffffff',
        fontSize: normalize(15),
        fontFamily: 'sans-serif-condensed',
        letterSpacing: 1,
        textAlign:'justify',
        marginLeft:25
    },
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor:'#000000'
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
    

})

export default styles