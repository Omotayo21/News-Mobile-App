import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DateDisplay = () => {
  const today = new Date();
  const day = today.getDate();

  // Determine the correct suffix for the day
  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // Handle 11th, 12th, 13th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const suffix = getDaySuffix(day);

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long", // Monday
  
  });

  const month = today.toLocaleDateString("en-US", {
    month: "long",
  });

  return (
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>
        {formattedDate.split(",")[0]}, {day}
        {suffix} {month}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
   
  },
  dateText: {
 fontFamily:'Times New Roman'  
  },
});

export default DateDisplay;
