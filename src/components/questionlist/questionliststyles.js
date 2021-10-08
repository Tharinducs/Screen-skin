import { StyleSheet } from 'react-native'
import normalize from "../../utils/fontsize"


const styles = StyleSheet.create({
    radioButtonRow: {
        flexDirection: 'row',
        alignItems:'center',
        flex:1
    },
    questionContainer: {
        backgroundColor: '#f3f3f3',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        paddingTop: 15,
        borderRadius: 30,
    },
    container: {
        flex:1,
        marginTop: 20,
        borderRadius: 30,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 15,
        paddingTop: 15
    },
    answerText:{
        fontWeight:'700',
        fontSize: normalize(15),
        letterSpacing:1,
        textAlign:'left',
        flexWrap:'wrap',
        paddingRight:70
    },
    questionText:{
        fontWeight:'700',
        fontSize: normalize(15),
        letterSpacing:1,
    },
    clickButton: {
        backgroundColor: '#ffff8a',
        width: 150,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center',
        marginTop: 25,
        borderRadius: 8
    },
    largeClickButton: {
        backgroundColor: '#ffff8a',
        width: 250,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center',
        marginTop: 25,
        borderRadius: 8
    },
    clickButtonText: {
        fontWeight: '700',
        fontSize: normalize(12),
        fontFamily: 'sans-serif-condensed',
        letterSpacing: 1
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
})


export default styles;