import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Artikel from "../components/Artikel";

const alatPembayaran = [
  {
    id: "1",
    judul: "Manik-manik ",
    deskripsi:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
      "It has survived not only five centuries, but also the leap into electronic typesetting, " +
      "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, " +
      "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    gambar: require("../assets/img_AlatPembayaran/manik-manik.png")
  },
  {
    id: "2",
    judul: "Kapak Batu (Tomako)",
    deskripsi:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  ",
    gambar: require("../assets/img_AlatPembayaran/tomako.png")
  },
  {
    id: "3",
    judul: "Gelang Batu (Ebha)",
    deskripsi:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    gambar: require("../assets/img_AlatPembayaran/gelang-batu.png")
  }
];

const AlatPembayaranScreen = () => {
  return (
    <View>
      <FlatList
        data={alatPembayaran}
        renderItem={({ item }) => (
          <Artikel
            judul={item.judul}
            deskripsi={item.deskripsi}
            gambar={item.gambar}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AlatPembayaranScreen;
