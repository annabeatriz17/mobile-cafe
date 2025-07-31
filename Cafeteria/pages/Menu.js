import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Menu( { navigation } ) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo ao Menu</Text>
            <Button title="Ir para a outra página" onPress={() => navigation.navigate("Home")} />
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
    title: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 20,
        marginTop: 20,
    },
});