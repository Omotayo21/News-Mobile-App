import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
const ProfilePage = () => {
  const router = useRouter()
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={require("../assets/icons/icon.png")}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Image
              source={require("../assets/icons/Frame 3.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          ),
          headerRight: () => "",
        }}
      />
      <View style={styles.profileHeader}>
        <Image
          source={require("../assets/icons/user.png")} // Replace with your own image
          style={styles.profileImage}
        />
        <Text style={styles.username}>Your amazing journey begins here</Text>
        <Text style={styles.userTagline}>
          Sync your favorites, bookmarks, and join the chat!. We can keep your
          settings safe so you can also sync them across devices or retrieve
          them when you get a new device
        </Text>
        <TouchableOpacity style={styles.signUpButton}>
          <LinearGradient
            colors={["#E30101", "#FF6B00"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.gradient}
          >
            <Text style={styles.signUpText}>Sign Up - $200/month</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listItemText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listItemText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listItemText}>Feedback</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginVertical: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  userTagline: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  signUpButton: {
    marginTop: 20,
    width: "80%",
  },
  gradient: {
    paddingVertical: 12,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF6B00",
    marginBottom: 10,
  },
  listItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  listItemText: {
    fontSize: 16,
    color: "#FF6B00",
  },
  logo: {
    width: 120,
    height: 40,
    marginLeft: "50px",
  },
  headerIcon: {
    width: 40,
    height: 40,
    marginLeft: 16,
  },
});

export default ProfilePage;
