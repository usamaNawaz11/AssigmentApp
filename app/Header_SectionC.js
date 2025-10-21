import { useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { DummyName } from "../constants/DummyData";


const { height } = Dimensions.get("window");

const Header_SectionC = () => {
  const [listVertical, setListVertical] = useState(DummyName)
    
  return (
     <View style={styles.SectionC}>
            <FlatList
              data={listVertical.slice(0, 4)}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item }) => (
                <View style={styles.tile2}>
              <Text style={styles.text2}>{item.val}</Text>
              <Text style={styles.text2}>{item.age}</Text>
              <Text style={styles.text2}>{item.gen}</Text>

            </View>
              )}
            />
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
})