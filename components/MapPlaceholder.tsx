import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

interface MapPlaceholderProps {
  style?: any;
  showRoute?: boolean;
  markerPosition?: { latitude: number; longitude: number };
  destinationPosition?: { latitude: number; longitude: number };
}

// Default to Bangalore center as per design context
const DEFAULT_REGION = {
  latitude: 12.9716,
  longitude: 77.5946,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export const MapPlaceholder: React.FC<MapPlaceholderProps> = ({
  style,
  showRoute = false,
  markerPosition = { latitude: 12.9716, longitude: 77.5946 },
  destinationPosition = { latitude: 12.9816, longitude: 77.6046 }
}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme as 'light' | 'dark'];

  return (
    <View style={[styles.container, style]}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={DEFAULT_REGION}
        userInterfaceStyle={colorScheme}
      >
        <Marker coordinate={markerPosition}>
          <View style={[styles.markerContainer, { backgroundColor: colors.primary }]}>
            <MaterialIcons name="two-wheeler" size={16} color="#1c190d" />
          </View>
        </Marker>

        {showRoute && (
          <>
            <Marker coordinate={destinationPosition}>
              <MaterialIcons name="location-on" size={32} color="#ef4444" />
            </Marker>
            <Polyline
              coordinates={[markerPosition, destinationPosition]}
              strokeColor={colors.primary}
              strokeWidth={4}
            />
          </>
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerContainer: {
    padding: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
