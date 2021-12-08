import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        paddingLeft: 15,
        paddingTop: 35,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between', 


        
    },
    headerMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15
    }

});

export default styles;    