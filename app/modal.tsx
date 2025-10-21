import { Images } from "@/assets/NewImages/Index";
import { DummyName, TreeData } from "@/constants/DummyData";
import React, { useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

export default function Home() {
  const [listHorizontal, setListHorizontal] = useState(TreeData)
  const [listVertical, setListVertical] = useState(DummyName)
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Assignment 2</Text>
      </View>
      <View style={styles.SeectionB}>
        <FlatList
          data={listHorizontal.slice(0, 4)}
          horizontal={true}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tile}>
              <Text style={styles.text2}>{item.val}</Text>
              <Image source={Images.TreeIcon} style={styles.tileImage} />
            </View>
          )}
        />
      </View>
      <View style={styles.SectionC}>
        <FlatList
          data={listVertical.slice(0, 5)}
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
      <View style={styles.SectionD}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "black" }}>Name: </Text>
          <Text style={{ color: "black" }}>Last Name, </Text>
          <Text style={{ color: "black" }}>First Name</Text>
        </View>
        <View style={{ flexDirection: "row",marginBottom:30 }}>
          <Text style={{ color: "black" }}>ID: </Text>
          <Text style={{ color: "black" }}>99999</Text>
        </View>
      </View>
    </SafeAreaView>

  );
}

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
  text2: {
    color: "#000",
    marginBottom: 5
  },
  SeectionB: {
    height: (height * 4) / 14,
    backgroundColor: "#FFA500",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center"
  },
  SectionC: {
    height: (height * 7) / 14,
    backgroundColor: "#FFB6C1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center"
  },
  SectionD: {
    height: (height * 2) / 14,
    backgroundColor: "#808080",
    justifyContent: "center",
    alignItems: "center"
  },
  tile: {
    backgroundColor: "#87CEEB",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    padding: 16,
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
  tileImage: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    resizeMode: "contain",
  },

});
