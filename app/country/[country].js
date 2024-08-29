import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";

// Mapping of country codes to full country names
const countryNames = {
  IN: "India",
  FR: "France",
  US: "United States",
  GB: "United Kingdom",
  AU: "Australia",
  BR: "Brazil",
  CN: "China",
  // Add more countries as needed
};

const CountryNews = () => {
  const router = useRouter();
  const { country } = useLocalSearchParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!country) return; // Return early if country is undefined

    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://gnews.io/api/v4/top-headlines?lang=en&country=${country}&max=10&apikey=84f0fd6a8faaf6850048a210745568f9`
        );
        const data = await response.json();
        setNews(data.articles);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [country]);

  const countryName = countryNames[country.toUpperCase()] || country;

  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={require("../../assets/icons/icon.png")}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Image
              source={require("../../assets/icons/Frame 3.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image
                source={require("../../assets/icons/bookmark.png")}
                style={styles.headerRightIcon}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Text style={styles.header}>Top News in {countryName}</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.newsItem}
              onPress={() => handlePress(item.url)}
            >
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDescription}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      )}
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
  newsItem: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  newsDescription: {
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    color: "red",
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
});

export default CountryNews;
