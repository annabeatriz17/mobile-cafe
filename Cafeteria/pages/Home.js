import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";

export default function Home( { navigation } ) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bem vindo ao Grão & Café</Text>
            <View style={styles.containerbuttons}>
                <View style={styles.element1}>
                    <Text style={styles.text1}>Cafés</Text>
                </View>
                <View style={styles.element2}>
                    <Text style={styles.text2}>Pães</Text>
                </View>
                <View style={styles.element3}>
                    <Text style={styles.text3}>Doces</Text>
                </View>
                <View style={styles.element4}>
                    <Text style={styles.text4}>Chás</Text>
                </View>
            </View>
            <View style={styles.containertext}>
                <Text style={styles.textcon}>SOMOS RECONHECIDOS COMO UMA CAFETERIA INOVADORA, E ESSE TÍTULO NOS ENCHE DE ORGULHO!</Text>
            </View>
            <View style={styles.containerlocation}>
                <MaterialCommunityIcons name="google-maps" size={24} color="black" />
                <Text style={styles.textlocation}>ENCONTRE A LOJA MAIS PRÓXIMA!</Text>
            </View>
            <View style={styles.texts}>WE LOVE MAKING COFFE FOR YOU</View>
            <Button onPress={() => navigation.navigate("Menu")}>
                <Text style={styles.menu}>VER MENU</Text>
            </Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        textAlign: "center",
        justifyContent: "flex-start",
        fontSize: 25,
        color: "#c8b5a0",
        fontWeight: "bold",
        padding: 10,
        margin: 10,
    },
    containerbuttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        padding: 20,
    },
    element1: {
        backgroundColor: "#c8b5a0",
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    element2: {
        backgroundColor: "#c8b5a0",
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    text1: {
        fontSize: 20,
    },
    text2: {
        fontSize: 20,
    },
    element3: {
        backgroundColor: "#c8b5a0",
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    element4: {
        backgroundColor: "#c8b5a0",
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    text3: {
        fontSize: 20,
    },
    text4: {
        fontSize: 20,
    },
    containertext: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 20,
        margin: 10,
    },
    textcon: {
        fontSize: 20,
        textAlign: "center",
        color: "#c8b5a0",
    },
    containerlocation: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderColor: "#c8b5a0",
        borderWidth: 2,
        width: "80%",
        borderRadius: 35,
        padding: 20,
        margin: 10,
    },
    textlocation: {
        fontSize: 15,
        color: "#c8b5a0",
    },
    texts: {
        fontSize: 20,
        color: "#c8b5a0",
        textAlign: "center",
        margin: 10,
        padding: 10,
    },
});