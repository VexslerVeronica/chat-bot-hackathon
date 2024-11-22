import React, { useState } from "react";
import { FAB } from "react-native-paper";
import { styles } from "../styles";
import CustomModal from "./CustomModal";
import { View } from "react-native";

const FloatingChatButton = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <View style={{ backgroundColor: "#f2f2f2" }}>
      <FAB
        style={styles.fab}
        icon={showModal ? "close" : "chat"}
        onPress={handleShowModal}
      />
      <CustomModal visible={showModal} onClose={handleShowModal} />
    </View>
  );
};

export default FloatingChatButton;
