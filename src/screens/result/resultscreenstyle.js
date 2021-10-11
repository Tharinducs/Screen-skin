const { StyleSheet } = require("react-native");
import normalize from "../../utils/fontsize"


const styles = StyleSheet.create({
    patientView: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#000000',
        paddingLeft:10,
        paddingRight:10
    },
    topBar :{
        backgroundColor:'#B2BEB5',
        height:'10%',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center'
    },
    topBarText:{
        fontWeight:'700',
        fontSize: normalize(15),
        letterSpacing:1
    },
    imageContainer:{
        backgroundColor:'#B2BEB5',
        borderRadius:30,
        marginTop:25,
        flexDirection:"row",
        justifyContent:'space-between',
        paddingRight:10,
        paddingLeft:20
    },
    imageColumn:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:15,
        paddingTop:15
    },
    textColumn:{
        flexDirection:'column',
        justifyContent:'center',
        flex:1,
        paddingTop:10
    },
    userImage:{
        width:120,
        height:120,
        borderRadius:10,
    },
    textrow1:{
        marginBottom:20,
        fontWeight:'700',
        fontSize: normalize(15),
        textAlign:'justify'
    },
    textrow2:{
        marginBottom:0,
        fontWeight:'700',
        fontSize: normalize(15),
        textAlign:'justify'
    },
    textrow3:{
        marginTop: -10,
        marginBottom:20,
        fontWeight:'700',
        fontSize: normalize(18),
        textAlign:'justify'
    },
    textrow4:{
        marginTop: -10,
        marginBottom:20,
        fontWeight:'700',
        fontSize: normalize(15),
        textAlign:'justify'
    },
    clickButton: {
        backgroundColor: '#B2BEB5',
        width: 250,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center',
        marginTop: 25,
        borderRadius: 8,
        marginBottom:10,
        justifyContent:'space-around',
        flexDirection:'row',
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
        marginBottom:20,
        justifyContent:'space-around',
        flexDirection:'row',
    },
    clickButtonText: {
        fontWeight: '700',
        fontSize: normalize(12),
        fontFamily: 'sans-serif-condensed',
        letterSpacing: 1,
        color:'#ffffff'
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    guideline:{
        fontWeight:'700',
        fontSize: normalize(15),
        marginBottom:10,
        textAlign:'justify'
        
    },
    guidlineContainer:{
        flex:1,
        backgroundColor:'#B2BEB5',
        borderRadius:30,
        paddingRight:15,
        paddingLeft:15,
        paddingTop:15,
        paddingBottom:15,
        marginTop:20
    }
})

export default styles;