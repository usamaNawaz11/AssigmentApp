import { Dimensions, StyleSheet, Text, View } from 'react-native';


const { height } = Dimensions.get("window");

const Header_SectionA = () => {

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Assignment 2</Text>
        </View>
    )
}

export default Header_SectionA

const styles = StyleSheet.create({
    headerContainer: {
        height: height / 14,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#87CEEB",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
})