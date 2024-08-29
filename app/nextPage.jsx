import React from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, Image, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
const { width, height } = Dimensions.get("window");
const NextPage = () => {

  const router = useRouter()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={require("../assets/images/bg.png")}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          padding: width * 0.02,
          justifyContent: "center",
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <View style={styles.hexagon}>
          <Image
            source={require("../assets/images/Rectangle 20.png")}
            style={[styles.image, styles.image2]}
          />
          <Image
            source={require("../assets/images/Rectangle 21.png")}
            style={[styles.image, styles.image6]}
          />
          <Image
            source={require("../assets/images/Rectangle 22.png")}
            style={[styles.image, styles.image3]}
          />
          <Image
            source={require("../assets/images/Rectangle 18.png")}
            style={[styles.image, styles.image1]}
          />
          <Image
            source={require("../assets/images/Rectangle 6.png")}
            style={[styles.image, styles.image5]}
          />
          <Image
            source={require("../assets/images/Rectangle 4.png")}
            style={[styles.image, styles.image4]}
          />
        </View>
        <View style={{ flex: 1, marginLeft: "4px", marginTop: "36px" }}>
          <Image source={require("../assets/icons/Floxx.png")} />
          <Text
            style={{
              fontSize: 46,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              paddingTop: "7px",
            }}
          >
            News from all over the world
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/dashboard')}>
          <LinearGradient
            colors={["#E30101", "#FF6B00"]} // Orange to yellow
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  hexagon: {
    width:400,
    height: 400,
    position: "relative",
    marginTop: "110px",
    alignSelf: 'center'
  },
  image: {
    position: "absolute",
   
  },
  image1: { top: 0, left: "40%" }, // Top center
  image2: { top: "5%", left: 50 }, // Middle left
  image3: { top: "5%", right: 40 }, // Middle right
  image4: { bottom: 0, left: "33%" }, // Bottom center
  image5: { bottom: "15%", left: 20 }, // Bottom left
  image6: { bottom: "15%", right: 10 },

  button: {
    borderRadius: 10,
    overflow: "hidden",
 top:20,
 
  },
  gradient: {
    paddingVertical: 15,
 
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default NextPage;
