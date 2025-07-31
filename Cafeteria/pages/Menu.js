import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Menu({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#c8b5a0" />
                </TouchableOpacity>
                <Text style={styles.title}>Cardápio</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.category}>
                    <Text style={styles.categoryTitle}>Cafés</Text>
                    <View style={styles.menuItem}>
                        <Text style={styles.itemName}>Expresso</Text>
                        <Text style={styles.itemPrice}>R$ 5,00</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text style={styles.itemName}>Cappuccino</Text>
                        <Text style={styles.itemPrice}>R$ 8,00</Text>
                    </View>
                </View>

                <View style={styles.category}>
                    <Text style={styles.categoryTitle}>Pães</Text>
                    <View style={styles.menuItem}>
                        <Text style={styles.itemName}>Pão Francês</Text>
                        <Text style={styles.itemPrice}>R$ 2,00</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text style={styles.itemName}>Croissant</Text>
                        <Text style={styles.itemPrice}>R$ 6,00</Text>
                    </View>
                </View>

                <View style={styles.category}>
                    <Text style={styles.categoryTitle}>Doces</Text>
                    <View style={styles.menuItem}>
                        <Text style={styles.itemName}>Brownie</Text>
                        <Text style={styles.itemPrice}>R$ 8,00</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text style={styles.itemName}>Bolo de Cenoura</Text>
                        <Text style={styles.itemPrice}>R$ 7,00</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#c8b5a0",
        marginLeft: 20,
    },
    content: {
        padding: 20,
    },
    category: {
        marginBottom: 30,
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#c8b5a0",
        marginBottom: 10,
    },
    menuItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    itemName: {
        fontSize: 16,
        color: "#444",
    },
    itemPrice: {
        fontSize: 16,
        color: "#c8b5a0",
        fontWeight: "bold",
    },
});