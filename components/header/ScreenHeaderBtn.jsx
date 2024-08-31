import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";



const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={"../assets/icons/Frame 6.png"}
        resizeMode="cover"
        style={styles.btnImg}
      />
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={{width: 30, height:30}}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    width: 80,
    height: 40,
    backgroundColor: "white",
    display: "flex",
    flexDirection: 'row',
    gap:"10px",
    justifyContent: "center",
    alignItems: "center",

  },
  btnImg: {
    width: 40,
    height: 40,
   
  },
});
export default ScreenHeaderBtn;
