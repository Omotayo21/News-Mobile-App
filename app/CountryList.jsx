// CountryList.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { useRouter, Stack } from "expo-router";
import BottomNavBar from "../components/header/Bottom";

const countries = [
  { name: "United States", code: "us" },
  { name: "Canada", code: "ca" },
  { name: "United Kingdom", code: "gb" },
  { name: "Australia", code: "au" },
  { name: "Germany", code: "de" },
  { name: "France", code: "fr" },
  { name: "India", code: "in" },
  { name: "China", code: "cn" },
  { name: "Japan", code: "jp" },
  { name: "Brazil", code: "br" },
];

const CountryList = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerShadowVisible: false,
          headerLeft: () => "",
          headerTitle: () => (
            <Image
              source={require("../assets/icons/Frame 3.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          ),
          headerRight: () => (
            ''
          ),
        }}
      />
      <Text style={styles.header}>Select a Country</Text>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.countryItem}
            onPress={() => {
              router.push(`/country/${item.code}`);
            }}
          >
            <Text style={styles.countryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.bottomNavContainer}>
        <BottomNavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  countryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  countryName: {
    fontSize: 18,
  },
  headerIcon: {
    width: 40,
    height: 40,
    marginLeft: 16,
  },
  headerRightIcon: {
    width: 30,
    height: 40,
    marginLeft: -41,
  },
  logo: {
    width: 120,
    height: 40,
    marginLeft: "50px",
  },
  bottomNavContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingVertical: 10, // Add padding for the navbar
  },
});

export default CountryList;
