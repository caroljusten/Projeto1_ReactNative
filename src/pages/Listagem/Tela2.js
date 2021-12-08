import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styles from './stylesTela2';

const Tela2 = () => {
    return (
        <LinearGradient
            colors={['#3a702a', '#000000']}
            style={styles.container}>
            <View style = {styles.headerContainer}>
                <View>
                    <Text style={{ fontFamily:'Montserrat-Bold', fontSize: 24, color: 'white' }}>Boa Noite</Text>
                </View>     
                <View style = {styles.headerMenu}>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../components/imagens/bell.png')}
                            style={{ height: 50, width: 50 }}
                        />
                    </TouchableOpacity> 
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Image 
                            source={require('../../components/imagens/history.png')}
                            style={{ height: 35, width: 35 }}
                        />
                    </TouchableOpacity> 
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Image 
                            source={require('../../components/imagens/settings.png')}
                            style={{ height: 32, width: 32 }}
                        />
                    </TouchableOpacity> 
                </View>    
            </View>            
        </LinearGradient>
    );
};

export default Tela2;