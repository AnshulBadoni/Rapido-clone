import React from 'react';
import { View, StyleSheet, Image, useColorScheme } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

interface MapPlaceholderProps {
  style?: any;
}

export const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ style }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme as 'light' | 'dark'];

  return (
    <View style={[styles.container, { backgroundColor: colors.border }, style]}>
      {/* Simulation of a map with a grid or an image */}
      <View style={styles.overlay}>
        <MaterialIcons name="map" size={48} color={colors.placeholder} />
      </View>

      {/* Simulation of markers */}
      <View style={[styles.marker, { top: '40%', left: '30%', backgroundColor: '#3b82f6' }]} />
      <View style={[styles.marker, { top: '60%', left: '70%', backgroundColor: colors.primary }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  overlay: {
    opacity: 0.3,
  },
  marker: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
  }
});
