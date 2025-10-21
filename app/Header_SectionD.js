import { Dimensions, StyleSheet, Text, View } from 'react-native';


const { height } = Dimensions.get("window");

const Header_SectionD = () => {
    
  return (
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
  )
}

export default Header_SectionD

const styles = StyleSheet.create({
   SectionD: {
    height: (height * 2) / 14,
    backgroundColor: "#808080",
    justifyContent: "center",
    alignItems: "center"
  },
})