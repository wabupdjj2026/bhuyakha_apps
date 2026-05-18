import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const LaguDaerahScreen = () => {
    return (
      <View style={styles.container}>
        <Text> Lagu Daerah Screen </Text>
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


export default LaguDaerahScreen;