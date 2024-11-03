import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import useFetchNews from "../../hook/useFetch";

const formatDate = (dateString) => {
  const options = {
  
    hour: "numeric",
    minute: "numeric",
  
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};
const NewsCard = ({ article, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <View style={styles.cardContent}>
      <View style={styles.textContainer}>
        <Text style={styles.headline} numberOfLines={2}>
          {article.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {article.description}
        </Text>
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
      </View>
      <Image source={{ uri: article.image }} style={styles.image} />
    </View>
  </TouchableOpacity>
);

const NewsList = () => {
  const { data: newsData, loading, error } = useFetchNews('general');
  const router = useRouter();

  const handlePress = () => {
    router.push(
      `/full-details/full-details?title=${encodeURIComponent(item.title)}`
    );
  };

  if (loading) return <ActivityIndicator size="large" color="#FFA500" />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <FlatList
      data={newsData}
      keyExtractor={(item) => item.publishedAt} // Assuming title is unique
      renderItem={({ item }) => (
        <NewsCard article={item}  />
      )}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 4,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingVertical: 18,
    marginBottom: 6,
    backgroundColor: "#fff",
    borderBottomColor: 'gray',
    borderBottomWidth:2
 
   
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});

export default NewsList;
