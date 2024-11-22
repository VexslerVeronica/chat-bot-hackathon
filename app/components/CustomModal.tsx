import React from "react";
import { View, StyleSheet } from "react-native";
import Chatbot from "../screens/ChatBotScreen";
import { ScrollView } from "react-native-gesture-handler";

type CustomModalProps = {
  visible: boolean;
  onClose: () => void;
};

const CustomModal = ({ visible, onClose }: CustomModalProps) => {
  return (
    <View
      style={{
        position: "relative",
        display: visible ? "block" : "none",
        width: "100%",
        marginBottom: "75px",
        backgroundColor: "#f2f2f2",
      }}
    >
      <View style={styles.modalView}>
        <ScrollView style={styles.container}>
          <Chatbot />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 60,
  },
  modalView: {
    backgroundColor: "white",
    margin: 20,
    marginTop: 0,
    borderRadius: 45,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderBottomRightRadius: 5,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    width: "100%",
  },
});

export default CustomModal;
