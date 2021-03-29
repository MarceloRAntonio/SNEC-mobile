import React, { useState, useEffect } from 'react';
import { View, SafeAreaView ,Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Logon({ navigation }) {

    const [registration, setRegistration] = useState("");

    async function handleLogin() {
        if (registration !== ""){
            await AsyncStorage.setItem('@ifma-registration', registration);
            navigation.navigate('Feed', { registration });

        }
    }

    useEffect(() => {
        async function getStorage() {
            const registration = await AsyncStorage.getItem('@ifma-registration');
            if (registration) {
                navigation.navigate('Feed', {registration});
            }
        }
        getStorage();
    }, [])

    return(
        <View style={styles.container}>
            
            <Image
                style={ {height: 120, width: 100 }}
                source={require('../../../assets/ifma.png')}
            />
            
            <TextInput 
            style = {styles.input} 
            placeholder="Matrícula" 
            onChangeText={text => setRegistration(text)}
            />
            <TouchableOpacity 
            style = {styles.button}
            onPress={handleLogin}
            >
                <Text style = {styles.title} >Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d4d8d7",
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        marginTop: 40,
        height: 56,
        backgroundColor: "rgba(255,255,255,0.4)",
        fontSize: 22,
        paddingHorizontal: 10,
        borderRadius: 6,
        width: 300,
    },
    button: {
        height: 56,
        paddingHorizontal: 10,
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8b9290",
        marginTop: 40,
    },
    title:{
        fontSize: 24,
        color: "#ffffff",
    }
})