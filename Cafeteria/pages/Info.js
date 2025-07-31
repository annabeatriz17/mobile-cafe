import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";

export default function Info( { navigation } ) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Image source={require("../assets/img/padaria.jpg")} style={styles.image} />
                <Text style={styles.title}>O QUE PODEMOS FAZER POR VOCÊ?</Text>
                <Text style={styles.subtitle}>A sua opinião faz toda diferença para continuarmos aprimorando a qualidade dos nossos produtos e do nosso atendimento.</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>ENVIE SUA MENSAGEM</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text2}>Acreditamos que pessoas fazem a diferença!</Text>
                <Text style={styles.text3}>Venha fazer a diferença conosco. Todos os talentos são bem vindos aqui, queremos te conhecer.</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>TRABALHE NA GRÃO & CAFÉ</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContent: {
        alignItems: "center",
    },
    image: {
        width: 390,
        height: 250,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
        padding: 10,
        color: "#a58f75ff",
    },
    subtitle: {
        fontSize: 16,
        margin: 10,
        padding: 10,
        textAlign: "center",
        color: "#c8b5a0",
    },
    buttonContainer: {
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    button: {
        width: "100%",
        backgroundColor: "#c8b5a0",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    text2: {
        margin: 10,
        fontSize: 18,
        textAlign: "center",
        color: "#b39b81ff",
    },
    text3: {
        fontSize: 18,
        textAlign: "center",
        color: "#c8b5a0",
    },
});