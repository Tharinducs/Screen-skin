import { StyleSheet } from 'react-native';
import normalize from "../../utils/fontsize"

const styles = StyleSheet.create({
    patientView: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#ffffff',
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
        color: '#ffb575',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: normalize(13),
        paddingLeft: 10,
        paddingRight: 10,
        letterSpacing: 1
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
    container: {
        flex: 1,
        justifyContent: "center",
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
    

})

export default styles