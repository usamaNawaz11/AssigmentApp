import CustomModal from '@/components/CustomModal';
import { useState } from 'react';
import { Alert, Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { DummyName } from "../constants/DummyData";


const { height } = Dimensions.get("window");

const Header_SectionC = () => {
    const [listVertical, setListVertical] = useState(DummyName)
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [updatedValue, setUpdatedValue] = useState("");
    const [updatedAge, setUpdatedAge] = useState("");
    const [updatedGen, setUpdatedGen] = useState("");

    const handleLongPress = (item) => {
        setSelectedItem(item);
        setUpdatedValue(item.val);
        setUpdatedAge(item.age)
        setUpdatedGen(item.gen)
        setModalVisible(true);
    };

    const handleUpdate = () => {
        if (!updatedValue.trim()) {
            Alert.alert("Validation", "Value cannot be empty!");
            return;
        }
        const updatedList = listVertical.map((item) =>
            item.id === selectedItem.id ? { ...item, val: updatedValue,age:updatedAge,gen:updatedGen } : item
        );
        setListVertical(updatedList);
        setModalVisible(false);
    };

    return (
        <View style={styles.SectionC}>
            <FlatList
                data={listVertical}
                showsVerticalScrollIndicator={true}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        Alert.alert(`Item Pressed ${item.val}`)
                    }}
                        style={styles.tile2}
                        onLongPress={()=>handleLongPress(item)}
                        >
                        <Text style={styles.text2}>{item.val}</Text>
                        <Text style={styles.text2}>{item.age}</Text>
                        <Text style={styles.text2}>{item.gen}</Text>

                    </TouchableOpacity>
                )}
            />
            <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)}>
                <Text style={styles.modalTitle}>Edit Value</Text>

                <TextInput
                    style={styles.input}
                    value={updatedValue}
                    onChangeText={setUpdatedValue}
                    placeholder="Enter new value"
                />
                 <TextInput
                    style={styles.input}
                    value={updatedAge}
                    onChangeText={setUpdatedAge}
                    placeholder="Enter new Age"
                />
                 <TextInput
                    style={styles.input}
                    value={updatedGen}
                    onChangeText={setUpdatedGen}
                    placeholder="Enter new Gen"
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.cancelBtn}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.confirmBtn} onPress={handleUpdate}>
                        <Text style={styles.confirmText}>Update</Text>
                    </TouchableOpacity>
                </View>
            </CustomModal>
        </View>
    )
}

export default Header_SectionC

const styles = StyleSheet.create({
    SectionC: {
        height: (height * 7) / 14,
        backgroundColor: "#FFB6C1",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center"
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
        justifyContent: "center",
    },
    cancelBtn: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    confirmBtn: {
        backgroundColor: "#007AFF",
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
})