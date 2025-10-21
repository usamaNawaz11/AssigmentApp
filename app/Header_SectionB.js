import { useState } from 'react';
import { Alert, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Images } from "../assets/NewImages/Index";
import { TreeData } from "../constants/DummyData";


const { height } = Dimensions.get("window");

const Header_SectionB = () => {
      const [listHorizontal, setListHorizontal] = useState(TreeData)
    
  return (
     <View style={styles.SeectionB}>
            <FlatList
              data={listHorizontal}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>{
                    Alert.alert(`Item pressed ${item.val}`)
                }} style={styles.tile}>
                  <Text style={styles.text2}>{item.val}</Text>
                  <Image source={Images.TreeIcon} style={styles.tileImage} />
                </TouchableOpacity>
              )}
            />
          </View>
  )
}

export default Header_SectionB

const styles = StyleSheet.create({
     SeectionB: {
    height: (height * 4) / 14,
    backgroundColor: "#FFA500",
    flexDirection: "row",
    alignItems: "center",
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
   tileImage: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    resizeMode: "contain",
  },
})