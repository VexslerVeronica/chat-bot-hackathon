import React from "react";
import { styles } from "../styles";
import { Image, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/pulse-logo.png")}
        style={{ justifyContent: "center" }}
      />
    </View>
  );
};

export default WelcomeScreen;
