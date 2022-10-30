import React, { useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, View, } from "react-native";
import { cities } from "./../data";
import { WeatherContext } from "../context/weatherContext";
import GlobalStyles from "./../GlobalStyles";
import DefaultButton from "./ui/DefaultButton";
import Divider from "./ui/Divider";

const CityModal = () => {
  const { fetchWeather, isModalOpen, closeModal } = useContext(WeatherContext);

  const onPress = async ({ lat, lon }) => {
    await fetchWeather(lat, lon);
    closeModal();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalOpen}
      onRequestClose={() => closeModal()}
    >
      <View style={GlobalStyles.centeredView}>
        <View style={styles.modalView}>
          {cities.map((city) => (
            <Pressable onPress={() => onPress(city)} key={city.id}>
              <Text style={styles.modalText}>{city.name}</Text>
            </Pressable>
          ))}
          <Divider height={15} />
          <DefaultButton title="Отмена" onPress={closeModal}></DefaultButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingVertical: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 7,
    textAlign: "center",
    fontFamily: "lato-regular",
  },
});

export default CityModal;
