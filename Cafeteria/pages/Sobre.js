import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Sobre( { navigation } ) {   
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo ao meu perfil</Text>
            <Image source={require("../assets/img/eu.jpg")} style={styles.image} />
            <Text style={styles.subtitle}>Nome: Anna Beatriz</Text>
            <Text style={styles.subtitle}>Idade: 17 anos</Text>
            <Text style={styles.subtitle}>Cidade: Valinhos</Text>
            <Text style={styles.subtitle}>E-mail: annabeatrizbe13@gmail.com</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
        borderRadius: 100,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
    },
    subtitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 10,
    },
});