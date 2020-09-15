// screens folder to add all the screen components
import React from 'react'
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native'

export default function WelcomeScreen(props) {
    return (
        <ImageBackground
        style={styles.background}
        source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
            {/* here we can use the self closing sintax */}
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/> 
            <Text> Sell What You Don't Need</Text>
            </View>

            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1, // image takes the entire screen
        justifyContent: "flex-end", //move the block at the bottom of the screen
        alignItems: "center", // this is what allow us to move the logo to the center because is the parent
    },
    loginButton: {
        width:'100%',
        height: 70, // pixels 
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        width:'100%',
        height: 70, // pixels 
        backgroundColor: '#4ecdc4',
    },
    logo:{
        //use abosulute position to place our logo relative to its parent
        width: 100,
        height: 100,
    },
    logoContainer:{
        position: 'absolute',
        top: 70,
        alignItems: "center",
    }
})  
