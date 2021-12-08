import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        paddingLeft: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',        
    },
    headerMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15
    },
    bodyCont1: {
        flex: 3,  
    },
    bodyCont2: {
        flex: 3,
        
        paddingLeft: 15, 
        paddingRight: 15,
        paddingTop: 35,
    },
    linha: {
        flexDirection: 'row',
    }
});

export default styles;    