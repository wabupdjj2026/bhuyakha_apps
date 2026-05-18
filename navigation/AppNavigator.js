import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

import SukuScreen from "../screens/SukuScreen";
import BahasaScreen from "../screens/BahasaScreen";
import DestinasiScreen from "../screens/DestinasiScreen";
import AlatMusikScreen from "../screens/AlatMusikScreen";
import AlatPembayaranScreen from "../screens/AlatPembayaranScreen";
import LaguDaerahScreen from "../screens/LaguDaerahScreen";
import MakananKhasScreen from "../screens/MakananKhasScreen";
import SeniTradisionalScreen from "../screens/SeniTradisionalScreen";
import SenjataTradisionalScreen from "../screens/SenjataTradisionalScreen";
import TarianScreen from "../screens/TarianScreen";
import TentangScreen from "../screens/TentangScreen";
//

import { Ionicons } from "@expo/vector-icons";

const headerConf = {
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "grey"
    },
    headerTitle: "Bhuyakha",
    headerTintColor: "white",
    gesturesEnabled: false,

    headerLeft: (
      <Ionicons
        name="md-menu"
        size={30}
        color="white"
        style={{ paddingLeft: 15 }}
        onPress={() => navigation.openDrawer()}
      />
    )
  })
};

const SukuStack = createStackNavigator(
  {
    Suku: SukuScreen
  },
  headerConf
);

const BahasaStack = createStackNavigator(
  {
    Bahasa: BahasaScreen
  },
  headerConf
);

const TarianStack = createStackNavigator(
  {
    Tarian: TarianScreen
  },
  headerConf
);

const AlatPembayaranStack = createStackNavigator(
  {
    AlatPembayaran: AlatPembayaranScreen
  },
  headerConf
);

const AlatMusikStack = createStackNavigator(
  {
    AlatMusik: AlatMusikScreen
  },
  headerConf
);

const LaguDaerahStack = createStackNavigator(
  {
    LaguDaerah: LaguDaerahScreen
  },
  headerConf
);

const MakananKhasStack = createStackNavigator(
  {
    MakananKhas: MakananKhasScreen
  },
  headerConf
);

const SeniTradisionalStack = createStackNavigator(
  {
    SeniTradisional: SeniTradisionalScreen
  },
  headerConf
);

const SenjataTradisionalStack = createStackNavigator(
  {
    SenjataTradisional: SenjataTradisionalScreen
  },
  headerConf
);

const DestinasiStack = createStackNavigator(
  {
    Destinasi: DestinasiScreen
  },
  headerConf
);

const TentangStack = createStackNavigator(
  {
    Tentang: TentangScreen
  },
  headerConf
);
//Semua sudah ditambahkan Si

const AppNavigator = createDrawerNavigator(
  {
    Suku: SukuStack,
    Bahasa: BahasaStack,
    Tarian: TarianStack,
    AlatPembayaran: {
      screen: AlatPembayaranStack,
      navigationOptions: {
        title: "Alat Pembayaran"
      }
    },
    AlatMusik: {
      screen: AlatMusikStack,
      navigationOptions: {
        title: "Alat Musik"
      }
    },
    LaguDaerah: {
      screen: LaguDaerahStack,
      navigationOptions: {
        title: "Lagu Daerah"
      }
    },
    MakananKhas: {
      screen: MakananKhasStack,
      navigationOptions: {
        title: "Makanan Khas"
      }
    },
    SeniTradisional: {
      screen: SeniTradisionalStack,
      navigationOptions: {
        title: "Seni Tradisional"
      }
    },
    SenjataTradisional: {
      screen: SenjataTradisionalStack,
      navigationOptions: {
        title: "Senjata Tradisional"
      }
    },
    DestinasiWisata: {
      screen: DestinasiStack,
      navigationOptions: {
        title: "Destinasi Wisata"
      }
    },
    Tentang: TentangStack
  },
  {
    initialRouteName: "Suku"
  }
);

export default createAppContainer(AppNavigator);
