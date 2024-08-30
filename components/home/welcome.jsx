import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  ActivityIndicator,
} from "react-native";
import DateDisplay from "./date";
import { useRouter } from "expo-router";
import useFetchNews from "../../hook/useFetch"; // Custom hook to fetch news

const categories = [
  "world",
  "business",
  "sports",
  "technology",
  "entertainment",
  "science",
  "nation",
];

const Welcome = () => {
  const [category, setCategory] = useState(null); // No default category
  const { data: newsData, loading, error } = useFetchNews(category); // Fetch news for selected category
  const router = useRouter();

  return (
    <View>
      <DateDisplay />
      <Text style={styles.title}>Daily Feed</Text>
      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => setCategory(item)}
            >
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.categoryList}
          horizontal
        />
      </View>

      {/* Image Background */}
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/Frame 17.png")} // Replace with your image path
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
        >
          {/* Icon in the top-right corner */}
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={require("../../assets/icons/bookmark.png")} // Replace with your icon path
              style={styles.icon}
            />
          </TouchableOpacity>

          {/* Text in the bottom-left corner */}
          <View style={styles.textContainer}>
            <View style={styles.header}>
              <Image
                source={require("../../assets/icons/Floxx news.png")} // Corrected icon source path
                style={styles.headerImage}
              />
              <Text style={styles.timeText}>2 mins ago</Text>
            </View>
            <Text style={styles.headlineText}>
              Crypto Market plunges due to global...
            </Text>
          </View>
        </ImageBackground>
      </View>

      {/* News List */}
      <View style={styles.newsListContainer}>
        {category ? (
          loading ? (
            <ActivityIndicator size="large" color="#FFA500" />
          ) : error ? (
            <Text>Error: {error}</Text>
          ) : (
            <FlatList
              data={newsData}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.container}
                  onPress={() =>
                    router.push(
                      `/full-details/full-details?title=${encodeURIComponent(item.title)}`
                    )
                  } // URL Encoding
                >
                  <ImageBackground
                    source={{ uri: item.image }}
                    style={styles.imageBackground}
                    imageStyle={styles.imageStyle}
                  >
                    <View style={styles.textContainer}>
                      <View style={styles.header}>
                        <Image
                          source={require("../../assets/icons/Floxx news.png")}
                          style={styles.headerImage}
                        />
                      </View>
                      <Text style={styles.headlineText}>{item.title}</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )}
              contentContainerStyle={styles.newsList}
            />
          )
        ) : (
          <Text style={styles.noSelectionText}>Please select a category.</Text>
        )}
      </View>
    </View>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  title: {
    fontFamily: "Times New Roman",
    fontSize: 30,
    fontWeight: "bold",
  },
  categoryContainer: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  categoryButton: {
    marginRight: 20,
  },
  categoryText: {
    fontFamily: "Times New Roman",
    fontSize: 15,
    color: "gray",
  },
  categoryList: {
    paddingHorizontal: 16,
  },
  container: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  imageStyle: {
    borderRadius: 10,
    resizeMode: "cover",
    width: "100%",
    height: "300px",
  },
  iconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#ffffff",
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerImage: {
    width: 99,
    height: 19,
  },
  timeText: {
    color: "#FFFFFF",
    fontFamily: "Times New Roman",
    marginTop: 2,
  },
  headlineText: {
    color: "#FFFFFF",
    fontFamily: "Times New Roman",
    fontSize: 28,
  },
  newsListContainer: {
    marginTop: 1,
    marginBottom: "-100px",
  },
  newsList: {
    paddingHorizontal: 1,
  },
  newsCard: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    height: 200,
  },
  newsImageBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },
  newsImageStyle: {
    borderRadius: 10,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  newsHeadline: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  newsDescription: {
    color: "#ffffff",
    fontSize: 14,
    marginTop: 4,
  },
  noSelectionText: {
    textAlign: "center",
    fontSize: 18,
    color: "gray",
    marginTop: 20,
  },
});