import React, { useState } from 'react'
import { View, SafeAreaView ,Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function Logon({ navigation }) {

    const [registration, setRegistration] = useState("");

    return(
        <View style={styles.container}>
            <TextInput 
            style = {styles.input} 
            placeholder="Matrícula" 
            onChangeText={text => setRegistration(text)}
            />
            <TouchableOpacity 
            style = {styles.button}
            onPress={(() => navigation.navigate("Feed", { registration } ) )}
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
        height: 56,
        backgroundColor: "rgba(255,255,255,0.4)",
        fontSize: 22,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    button: {
        height: 56,
        paddingHorizontal: 10,
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8b9290",
        marginTop: 5,
    },
    title:{
        fontSize: 24,
        color: "#ffffff",
    }
})