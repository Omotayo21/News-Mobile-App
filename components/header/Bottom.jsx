import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";


const BottomNavBar = () => {
 const router = useRouter()
    return (
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}  onPress={() => router.push("/dashboard")}>
          <Image
            resizeMode="cover"
            source={"../../assets/icons/Group 19.png"}
            style={{ width: "103px", height: "40px", backgroundColor: "white" }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push("/CountryList")}
        >
          <Image
            resizeMode="cover"
            source={"../../assets/icons/explore.png"}
            style={styles.navButton}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image
            resizeMode="cover"
            source={"../../assets/icons/bookmark.png"}
            style={styles.navButton}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push("/profile")}
        >
          <Image
            resizeMode="cover"
            source={"../../assets/icons/user.png"}
            style={styles.navButton}
          />
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  navbar: {
    position: "fixed",
    bottom: 10,
    left: 0,
    right: 0,
    height: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor:'#ffffff',
    marginHorizontal:'20px',
    width:'100%',
    paddingVertical:'25px',
    paddingHorizontal:'2px'
  
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: '24px',
    height: '24px'
  },
});

export default BottomNavBar;
