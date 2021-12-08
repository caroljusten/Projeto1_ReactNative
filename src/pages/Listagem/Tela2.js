import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styles from './stylesTela2';

const Tela2 = () => {
    return (
        <LinearGradient
            colors={['#7536c2', '#000000']}
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
            <View style = {styles.bodyCont1}>
                <TouchableOpacity style={{ paddingLeft: 15, paddingRight: 15 }}>
                    <Image 
                        source={require('../../components/imagens/wrapped.jpg')}
                        style={{ height: 200, width: 380 }}
                    />
                    <View style={{ paddingLeft: 5, paddingTop: 15 }}>
                        <Text style={{ fontFamily:'Montserrat-Bold', fontSize: 24, color: 'white' }}>Restrospectiva 2021: Match</Text>
                        <Text style={{ fontFamily:'Montserrat-Medium', fontSize: 12, color: 'white' }}>Compare sua Restrospectiva com a de um amigo.</Text>
                        <Text style={{ fontFamily:'Montserrat-Medium', fontSize: 12, color: 'white' }}>Convide alguém para criar uma playlist do Match.</Text>
                    </View>  
                </TouchableOpacity>
            </View>    
            <View style = {styles.bodyCont2}>
                <Text style={{ fontFamily:'Montserrat-Bold', fontSize: 24, color: 'white', paddingBottom: 20  }}>Playlists</Text>
                <View style={styles.linha}>
                    <TouchableOpacity style={{ paddingRight: 20, paddingBottom: 40 }}>
                        <Image 
                            source={require('../../components/imagens/viral.jpg')}
                            style={{ height: 160, width: 160 }}
                        />
                        <View style={{ paddingTop: 5 }}>
                            <Text style={{ fontFamily:'Montserrat-Medium', fontSize: 10, color: 'white' }}>Adele, SZA, Lil Nas X, Doja Cat...</Text>
                        </View>  
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingRight: 20 }}>
                        <Image 
                            source={require('../../components/imagens/pop.jpg')}
                            style={{ height: 160, width: 160 }}
                        />
                        <View style={{ paddingTop: 5 }}>
                            <Text style={{ fontFamily:'Montserrat-Medium', fontSize: 10, color: 'white' }}>Ariana Grande, Lady GaGa, Ad...</Text>
                        </View>  
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingRight: 20 }}>
                        <Image 
                            source={require('../../components/imagens/punk.jpg')}
                            style={{ height: 160, width: 160 }}
                        />
                        <View style={{ paddingTop: 5 }}>
                            <Text style={{ fontFamily:'Montserrat-Medium', fontSize: 10, color: 'white' }}>Sex Pistols...</Text>
                        </View>  
                    </TouchableOpacity>
                </View> 
                <View style={styles.linha}>
                    <TouchableOpacity style={{ paddingRight: 20 }}>
                        <Image 
                            source={require('../../components/imagens/rock.jpg')}
                            style={{ height: 160, width: 160 }}
                        />
                        <View style={{ paddingTop: 5 }}>
                            <Text style={{ fontFamily:'Montserrat-Medium', fontSize: 10, color: 'white' }}>Queen, Iron Maide...</Text>
                        </View>  
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingRight: 20 }}>
                        <Image 
                            source={require('../../components/imagens/sad.jpg')}
                            style={{ height: 160, width: 160 }}
                        />
                        <View style={{ paddingTop: 5 }}>
                            <Text style={{ fontFamily:'Montserrat-Medium', fontSize: 10, color: 'white' }}>The Smiths...</Text>
                        </View>  
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingRight: 20 }}>
                        <Image 
                            source={require('../../components/imagens/synth.jpg')}
                            style={{ height: 160, width: 160 }}
                        />
                        <View style={{ paddingTop: 5 }}>
                            <Text style={{ fontFamily:'Montserrat-Medium', fontSize: 10, color: 'white' }}>Joy Division...</Text>
                        </View>  
                    </TouchableOpacity>
                </View> 
            </View>
             
        </LinearGradient>
    );
};

export default Tela2;