import React from "react";
import { Stack } from "expo-router";
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import ScreenHeaderBtn from "../components/header/ScreenHeaderBtn";
import Welcome from "../components/home/welcome";
import BottomNavBar from "../components/header/Bottom";
import Popular from "../components/home/popular";

const { width } = Dimensions.get("window");

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity style={styles.btnContainer}>
              <Image
                source={require("../assets/icons/Logo.png")}
                resizeMode="cover"
                style={styles.btnImg}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={require("../assets/icons/Badges-2.png")}
            />
          ),
          headerTitle: " ",
        }}
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Welcome />
        <Popular />
      </ScrollView>

      {/* Fixed Bottom Navigation Bar */}
      <View style={styles.bottomNavContainer}>
        <BottomNavBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
   paddingLeft: 20,
  },
  scrollViewContent: {
    paddingHorizontal: width * 0.02,
    paddingBottom: 100, // Add space for the bottom navbar
  },
  btnContainer: {
    width: 80,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  btnImg: {
    width: 100,
    height: 40,
  },
  bottomNavContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingVertical: 10, 
  },
});

export default Dashboard;
