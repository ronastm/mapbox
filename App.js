import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MapBox from '@react-native-mapbox-gl/maps';

MapBox.setAccessToken("pk.eyJ1Ijoicm9uYXMiLCJhIjoiY2tjeXN4dnBpMDc0cjJwbW82cnFwMDUwcCJ9.51W2p8jwpAIHuN59aRCiTg");

const MapsApp = () => {
  return (
      <View style={styles.page}>
        <View style={styles.container}>
        <MapBox.MapView  style={styles.map}>
          <MapBox.Camera zoomLevel={9} centerCoordinate={[106.865036, -6.175110]} />
        </MapBox.MapView>
        </View>
      </View>

  );
};

const styles = StyleSheet.create({
  page: {
    flex:1,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
});

export default MapsApp;
