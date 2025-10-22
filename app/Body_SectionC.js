import { Images } from '@/assets/NewImages/Index';
import CustomModal from '@/components/CustomModal';
import { useState } from 'react';
import { Alert, Button, Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { DummyName } from "../constants/DummyData";


const { height } = Dimensions.get("window");

const Body_SectionC = () => {
    const [listVertical, setListVertical] = useState(DummyName)
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [updatedValue, setUpdatedValue] = useState("");
    const [updatedAge, setUpdatedAge] = useState("");
    const [updatedGen, setUpdatedGen] = useState("");
    const [updatePress, setUpdatePress] = useState(false);

    const handleLongPress = (item) => {
        setSelectedItem(item);
        setUpdatedValue(item.val);
        setUpdatedAge(item.age)
        setUpdatedGen(item.gen)
        setModalVisible(true);
                setUpdatePress(false)

    };
    const handlePress = () => {
        setModalVisible(true);
        setUpdatePress(true)
        setUpdatedValue("")
        setUpdatedAge("")
        setUpdatedGen("")
    };

    const handleUpdate = () => {
        if (!updatedValue.trim()) {
            Alert.alert("Validation", "Value cannot be empty!");
            return;
        }
        const updatedList = listVertical.map((item) =>
            item.id === selectedItem.id ? { ...item, val: updatedValue, age: updatedAge, gen: updatedGen } : item
        );
        setListVertical(updatedList);
        setModalVisible(false);
    };
    const handleAdd = () => {
        if (!updatedValue || !updatedAge || !updatedGen) {
            Alert.alert("Validation", "All fields are required!");
            return;
        }

        const newItem = {
            id: Date.now().toString(), 
            val: updatedValue,
            age: updatedAge,
            gen: updatedGen,
        };

        setListVertical([newItem,...listVertical]);
        setModalVisible(false);
    };


    const handleDelete = () => {

        const updatedList = listVertical.filter((item) => item.id !== selectedItem.id)
        setListVertical(updatedList);
        setModalVisible(false);
    };

    return (
        <View style={styles.SectionC}>
            <TouchableOpacity onPress={handlePress} style={[styles.tile2, { alignItems: "center" }]}>
                <Text style={styles.text2}>New Person Entry</Text>
                <Image source={Images.AddIcon} style={styles.tileImage} />
            </TouchableOpacity>
            <FlatList
                data={listVertical}
                showsVerticalScrollIndicator={true}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        Alert.alert(`Item Pressed ${item.val}`)
                    }}
                        style={styles.tile2}
                        onLongPress={() => handleLongPress(item)}
                    >
                        <Text style={styles.text2}>{item.val}</Text>
                        <Text style={styles.text2}>{item.age}</Text>
                        <Text style={styles.text2}>{item.gen}</Text>

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
                <Text style={{ textAlign: "center" }}>{updatePress ? "Enter Age" : "Edit Age"}</Text>
                <TextInput
                    style={styles.input}
                    value={updatedAge}
                    onChangeText={setUpdatedAge}
                    placeholder="Enter new Age"
                />
                <Text style={{ textAlign: "center" }}>{updatePress ? "Enter gen" : "Edit gen"}</Text>
                <TextInput
                    style={styles.input}
                    value={updatedGen}
                    onChangeText={setUpdatedGen}
                    placeholder="Enter new Gen"
                />

                <View style={[updatePress?styles.buttonContainer:styles.buttonContainerAdd]}>
                    {updatePress ?
                        <Button title='Create' color={"#007AFF"} onPress={handleAdd} />
                        :
                        <View style={styles.buttonContainerAdd}>

                            <Button title='Update' color={"#007AFF"} onPress={handleUpdate} />
                            <Button title='Delete' color={"red"} onPress={handleDelete} />
                        </View>
                    }

                </View>
            </CustomModal>
        </View>
    )
}

export default Body_SectionC

const styles = StyleSheet.create({
    SectionC: {
        height: (height * 7) / 14,
        backgroundColor: "#FFB6C1",
        alignSelf: "center",
        width: "100%"
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
        marginBottom: 5
    },
    tile2: {
        backgroundColor: "#FFFDE7",
        borderRadius: 10,
        justifyContent: "space-between",
        marginVertical: 5,
        width: "90%",
        alignSelf: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        padding: 10,
        marginTop: 10
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
        justifyContent: "space-between",
        width: "50%",
        alignSelf: "center"
    },
      buttonContainerAdd: {
        flexDirection:"row",
        justifyContent:"space-between",
        width:"90%",
        alignSelf:"center"
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
    tileImage: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
})