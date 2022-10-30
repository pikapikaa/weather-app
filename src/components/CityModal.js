import React, { useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, View, Button } from "react-native";
import { cities } from "./../data";
import { WeatherContext } from "../context/weatherContext";
import GlobalStyles from "./../GlobalStyles";

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
          <Button title="Отмена" onPress={closeModal}></Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
    marginBottom: 3,
    textAlign: "center",
    fontFamily: "lato-regular",
  },
});

export default CityModal;
