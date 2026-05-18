import React from "react";
import { Text, View, StyleSheet, TextInput, FlatList} from "react-native";
import * as Animatable from 'react-native-animatable'

const listItem = 
['ADIK - UWGWAKHE','BAPA ADE - AFFA', 'BAPA TUA - ALONG', 'BAPA - ARRAY', 'CICIT - YOBHE KHAKHA',
'CUCU - OLOUW', 'IBU/MAMA - ANNA', 'IPAR - MOHO', 'ISTRI - MIYAE', 'KAKAK - AKHA', 'KAKEK (Ayah dari Ayah kita) ABHU RO',
'KAKET (Ayah dari Ibu kita) AHEE', 'KEPALA KERET - AKHONA', 'KEPALA SUKU - KHOSELO', 'MASYARAKAT - AKHA BHAKHE',
'NENEK (Mama dari Ayah kita) ABHU MIYAE', 'NENEK (Mama dari Mama kita) ANGGAENG', 'OM - AWAUW', 
'PENASEHAT ONDOFOLO - ABHU AFFA', 'PESURUH/PELAYAN ONDOFOLO - ABHU AKHO', 'PEMIMPIN ADAT - ONDOFOLO', 'RUMAH ADAT - OBHE',
'SAYA - REYA', 'SAUDARI PEREMPUAN - EMENG', 'SEPUPUH LAKI-LAKI - ROYAUW', 'SEPUPUH PEREMPUAN - ENGGO', 'SUAMI - MOLO',
'TANTA/TANTE - ENIMIE', 'ANDA - WEYA', 'BINTANG - FINDELAUW', 'MATAHARI - HU', 'API - I', 'MATA - IJOKHO',
'TANAH - KHANI', 'HATI/PERASAAN - KHENA', 'BULAN - OKHO', 'GUNUNG - MOKHO', 'IKAN - KHA', 'KEPONAKAN LAKI-LAKI - KHELLU',
'KEPONAKAN PEREMPUAN - OMMI']


const BahasaScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={listItem}
        renderItem={({ item }) => <Text style={{ padding: 20, fontSize: 20, textAlign: 'auto', fontWeight: 'bold'}}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default BahasaScreen;
