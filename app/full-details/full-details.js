import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  ScrollView
} from "react-native";
import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
//import { ScrollView } from "react-native-gesture-handler";

const useFetchArticleByTitle = (title) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          "https://gnews.io/api/v4/top-headlines?lang=en&country=us&apikey=84f0fd6a8faaf6850048a210745568f9"
        );
        const data = await response.json();

        // Create a regular expression from the decoded title
        const decodedTitle = decodeURIComponent(title).replace(/[-+]/g, " ");
        const titleRegex = new RegExp(decodedTitle, "i"); // "i" flag for case-insensitive matching

        // Find the article using the regex
        const foundArticle = data.articles?.find((item) =>
          titleRegex.test(item?.title)
        );

        setArticle(foundArticle);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [title]);

  return { article, loading, error };
};

const NewsDetails = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");

  // Parse URL to get the title
  useEffect(() => {
    const url = new URL(window.location.href); // Get current URL
    const titleParam = url.searchParams.get("title");
    setTitle(titleParam ? decodeURIComponent(titleParam) : "");
  }, []);

  const { article, loading, error } = useFetchArticleByTitle(title);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#FFA500" style={styles.loader} />
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load article.</Text>
      </View>
    );
  }

  if (!article) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Article not found.</Text>
      </View>
    );
  }

  const handleReadMore = () => {
    Linking.openURL(article.url);
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
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
      <Text style={styles.title}>{article.title}</Text>
      <Image source={{ uri: article.image }} style={styles.image} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "6px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        <Text>{article.source.name}</Text>
        <Text>{formatDate(article.publishedAt)}</Text>
      </View>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.content}>{article.content}</Text>
        <LinearGradient
          colors={["transparent", "#FFF"]}
          style={styles.gradient}
        />
        <TouchableOpacity style={styles.button} onPress={handleReadMore}>
          <LinearGradient
            colors={["#E30101", "#FF6B00"]} 
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.btngradient}
          >
            <Text style={styles.buttonText}>Read More</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    color: "#333",
  },
  contentContainer: {
    position: "relative",
    marginBottom: 20,
    marginTop: 80,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
  },
  readMoreButton: {
    position: "absolute",
    bottom: 0,
    right: 16,
    backgroundColor: "#FFA500",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  readMoreText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  button: {
    borderRadius: 10,
    overflow: "hidden",
    top: 90,

    position: "absolute",
    width: "100%",
  },
  btngradient: {
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
export default NewsDetails;
