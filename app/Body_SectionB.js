import React, { useState } from "react";
import {
    Alert,
    Button,
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Images } from "../assets/NewImages/Index";
import CustomModal from "../components/CustomModal"; // Adjust path as needed
import { TreeData } from "../constants/DummyData";

const { height } = Dimensions.get("window");

const Body_SectionB = () => {
    const [listHorizontal, setListHorizontal] = useState(TreeData);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [updatedValue, setUpdatedValue] = useState("");
    const [updatePress, setUpdatePress] = useState(false);


    const handleLongPress = (item) => {
        setSelectedItem(item);
        setUpdatedValue(item.val);
        setModalVisible(true);
        setUpdatePress(false)
    };
    const handlePress = () => {
        setModalVisible(true);
        setUpdatePress(true)
        setUpdatedValue("")
    };

    const handleUpdate = () => {
        if (!updatedValue.trim()) {
            Alert.alert("Validation", "Value cannot be empty!");
            return;
        }
        const updatedList = listHorizontal.map((item) =>
            item.id === selectedItem.id ? { ...item, val: updatedValue } : item
        );
        setListHorizontal(updatedList);
        setModalVisible(false);
    };

    const handleDelete = () => {

        const updatedList = listHorizontal.filter((item) => item.id !== selectedItem.id)
        setListHorizontal(updatedList);
        setModalVisible(false);
    };
    const handleAdd = () => {
        if (!updatedValue) {
            Alert.alert("Validation", "All fields are required!");
            return;
        }

        const newItem = {
            id: Date.now().toString(),
            val: updatedValue,

        };

        setListHorizontal([newItem, ...listHorizontal]);
        setModalVisible(false);
    };


    return (
        <View style={styles.SeectionB}>
            <TouchableOpacity style={styles.tile} onPress={handlePress}>
                <Text style={styles.text2}>Add</Text>
                <Image source={Images.AddIcon} style={[styles.tileImage, { borderWidth: 0 }]} />
            </TouchableOpacity>
            <FlatList
                data={listHorizontal}
                horizontal
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => Alert.alert(`Item pressed: ${item.val}`)}
                        onLongPress={() => handleLongPress(item)}
                        style={styles.tile}
                    >
                        <Text style={styles.text2}>{item.val}</Text>
                        <Image source={Images.TreeIcon} style={styles.tileImage} />
                    </TouchableOpacity>
                )}
            />

            <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)}>
                <Text style={{ textAlign: "center" }}>{updatePress ? "Enter Name" : "Edit Name"}</Text>

                <TextInput
                    style={styles.input}
                    value={updatedValue}
                    onChangeText={setUpdatedValue}
                    placeholder="Enter new value"
                />

                <View>
                    {updatePress ?
                        <>
                            <View style={styles.buttonContainer}>
                                <Button title='Create' color={"#007AFF"} onPress={handleAdd} />
                            </View>
                        </>
                        :
                        <View style={styles.buttonContainerAdd}>
                            <Button title='Update' color={"#007AFF"} onPress={handleUpdate} />
                            <Button title='Delete' color={"red"} onPress={handleDelete} />
                        </View>
                    }

                </View>
            </CustomModal>
        </View>
    );
};

export default Body_SectionB;

const styles = StyleSheet.create({
    SeectionB: {
        height: (height * 4) / 14,
        backgroundColor: "#FFA500",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "center",
    },
    tile: {
        backgroundColor: "#87CEEB",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
        padding: 16,
    },
    text2: {
        color: "#000",
        marginBottom: 5,
    },
    tileImage: {
        width: 64,
        height: 64,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 8,
        resizeMode: "contain",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonContainerAdd: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignSelf: "center"
    },
    cancelBtn: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    confirmBtn: {
        backgroundColor: "red",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginLeft: 8,
    },
    cancelText: {
        color: "#555",
        fontSize: 15,
    },
    confirmText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
    },
});
