import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerContainer: {  
        flex: 1,
        justifyContent: 'space-between', 
        alignItems:'flex-start',
        flexDirection: 'row',
        paddingTop: 15
    },
    titulo: { 
        alignItems: 'center', 
        color: 'white',
        fontFamily: 'Montserrat-Light'
    },
    arrow: {
        paddingLeft: 12,
    },
    menu: {
        paddingRight: 12,
    },
    bodyContainer: {
        flex: 4,
        justifyContent: 'center', 
        alignItems:'center',
    },
    subTituloContainer: {
        flex: 1,
        justifyContent: 'space-between', 
        alignItems:'flex-start',
        flexDirection: 'row',
        paddingLeft: 30,
        paddingTop: 40,   
        fontFamily: 'Montserrat-Light'
    }, 
    heart: {
        paddingRight: 30
    },
    playerContainer:{
        flex: 2,   
        justifyContent: 'space-between', 
        alignItems:'center',
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 30
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'space-between', 
        alignItems:'center',
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 30
    }

});

export default styles;