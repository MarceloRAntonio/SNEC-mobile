import React, { useState, useEffect } from 'react'
import {SafeAreaView ,Text, StyleSheet, ScrollView, View} from 'react-native'
import api from '../../services/api'

export default function Feed({ route }) {
    const { registration } = route.params;
    const [data, setData] = useState({});

    useEffect(() => {
        async function getStudent() {
            const response = await api.get(`/class/1/student/${registration}`);
            setData(response.data);
        }
        getStudent();

    },[])

    return(
        <ScrollView style={styles.container}>
            {data.messages?.map((message) => (
                <View  key={message.id} style={styles.messageView}>
                    <Text style={styles.title} >{message.title}</Text>
                    <Text style={styles.message} >{message.message}</Text>
                    <Text style={styles.messageTime} >
                        {new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(
                            new Date(message.created_at.replace(/-/g, "/"))
                        ) }
                    </Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e3e8e7",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    messageView: {
        backgroundColor: "grey",
        marginTop: 10,
        height: 'auto',
        padding: 10,
        borderRadius: 6,
    },
    message: {
        fontSize: 18,
        marginTop: 5,
        color: 'white',
    },
    messageTime: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: 'bold',
        color: 'white',
    }

})