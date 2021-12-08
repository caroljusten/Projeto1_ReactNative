import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from '../home/styles';
import LinearGradient from 'react-native-linear-gradient';

const Tela1 = () => {
    return (
        <LinearGradient
            colors={['#802828', '#1F1F1F']}
            style={styles.container}>
            <View style = {styles.headerContainer}>
                <View style={styles.arrow}>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../components/imagens/arrow-down.png')}                    
                        />
                    </TouchableOpacity>    
                </View>
                <View style = {styles.titulo}>
                    <Text style={{ fontSize: 12, color: 'white' }}>TOCANDO DO ÁLBUM</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white' }}>Black Sabbath (2009 Remastered Version)</Text>
                </View>    
                <View style={styles.menu}>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../components/imagens/menu-vertical.png')}
                        />
                    </TouchableOpacity>    
                </View>
            </View>   
            <View style = {styles.bodyContainer}>
                <Image
                    source={require('../../components/imagens/album-cover.jpg')}
                    style={{ height: 370, width: 370 }}
                    resizeMode="cover"
                />
            </View>
            <View style = {styles.subTituloContainer}>
                <View style = {{ justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>Behind the Wall of Sleep</Text>
                    <Text style={{ fontSize: 16, color: 'white' }}>Black Sabbath</Text>
                </View>  
                <View style={styles.heart}>
                    <TouchableOpacity>  
                        <Image
                            source={require('../../components/imagens/heart.png')}                      
                        />
                    </TouchableOpacity>
                </View>    
            </View>
            <View style = {styles.playerContainer}>
                <TouchableOpacity>  
                    <Image
                        source={require('../../components/imagens/shuffle.png')}                      
                    />
                </TouchableOpacity>
                <TouchableOpacity>  
                    <Image
                        source={require('../../components/imagens/previous.png')}                      
                    />
                </TouchableOpacity>
                <TouchableOpacity>  
                    <Image
                        source={require('../../components/imagens/play.png')}              
                    />
                </TouchableOpacity>
                <TouchableOpacity>  
                    <Image
                        source={require('../../components/imagens/next.png')}                      
                    />
                </TouchableOpacity>
                <TouchableOpacity>  
                    <Image
                        source={require('../../components/imagens/repeat.png')}                      
                    />
                </TouchableOpacity>
            </View>
            <View style = {styles.bottomContainer}>
            <TouchableOpacity>  
                    <Image
                        source={require('../../components/imagens/device.png')}     
                        style={{ height: 25, width: 25 }}                  
                    />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ paddingRight: 30 }}>  
                        <Image
                            source={require('../../components/imagens/share.png')}    
                            style={{ height: 25, width: 25 }}                
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>  
                        <Image
                            source={require('../../components/imagens/menu.png')}        
                            style={{ height: 25, width: 25 }}             
                        />
                    </TouchableOpacity>
                </View>    
            </View>   
        </LinearGradient>
    );
};

export default Tela1;