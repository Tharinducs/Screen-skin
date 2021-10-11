const { StyleSheet } = require("react-native");
import normalize from "../../utils/fontsize"


const styles = StyleSheet.create({
    patientView: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#000000',
        paddingRight:10,
        paddingLeft:10
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
        letterSpacing:1,
        textAlign:'justify'
    },
    imageContainer:{
        backgroundColor:'#B2BEB5',
        borderRadius:30,
        marginTop:25,
        flexDirection:"row",
        justifyContent:'space-between',
        paddingRight:10,
        paddingLeft:20,
        marginLeft:10,
        marginRight:10
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
        flex:1
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
    },
    textrow2:{
        marginBottom:20,
        fontWeight:'700',
        fontSize: normalize(15),
    }
})

export default styles;