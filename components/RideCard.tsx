import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Layout } from '../constants/Layout';

interface RideCardProps {
  type: 'Bike' | 'Auto' | 'Cab' | 'Delivery';
  amount: string;
  date: string;
  status: 'Completed' | 'Cancelled' | 'In-Ride';
  pickup: string;
  dropoff: string;
  onPress?: () => void;
  repeatable?: boolean;
}

export const RideCard: React.FC<RideCardProps> = ({
  type,
  amount,
  date,
  status,
  pickup,
  dropoff,
  onPress,
  repeatable = true
}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme as 'light' | 'dark'];

  const getIcon = () => {
    switch (type) {
      case 'Bike': return 'pedal-bike';
      case 'Auto': return 'electric-rickshaw';
      case 'Cab': return 'directions-car';
      case 'Delivery': return 'delivery-dining';
      default: return 'directions-bike';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'Completed': return colors.success;
      case 'Cancelled': return colors.error;
      case 'In-Ride': return colors.primary;
      default: return colors.text;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.typeContainer}>
          <View style={[styles.iconBox, { backgroundColor: colors.primary + '33' }]}>
            <MaterialIcons name={getIcon() as any} size={24} color={colors.primary} />
          </View>
          <View>
            <Text style={[styles.typeText, { color: colors.text }]}>{type} Ride • {amount}</Text>
            <Text style={[styles.dateText, { color: colors.muted }]}>{date}</Text>
          </View>
        </View>
        <View style={[
          styles.statusBadge,
          { backgroundColor: getStatusColor() + '22' }
        ]}>
          <Text style={[styles.statusText, { color: getStatusColor() }]}>{status}</Text>
        </View>
      </View>

      <View style={styles.routeContainer}>
        <View style={styles.timeline}>
          <View style={[styles.dot, { backgroundColor: colors.success }]} />
          <View style={[styles.line, { borderColor: colors.border }]} />
          <View style={[styles.dot, { backgroundColor: colors.error }]} />
        </View>
        <View style={styles.locations}>
          <Text style={[styles.locationText, { color: colors.text }]} numberOfLines={1}>{pickup}</Text>
          <Text style={[styles.locationText, { color: colors.text }]} numberOfLines={1}>{dropoff}</Text>
        </View>
      </View>

      {repeatable && (
        <View style={[styles.footer, { borderTopColor: colors.border + '33' }]}>
          <TouchableOpacity style={[styles.repeatButton, { backgroundColor: colors.primary }]}>
            <Text style={styles.repeatButtonText}>Repeat Ride</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.moreButton, { backgroundColor: colors.border + '33' }]}>
            <MaterialIcons name="more-horiz" size={20} color={colors.text} />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: Layout.borderRadius.xl,
    borderWidth: 1,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  typeContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 12,
    fontWeight: '500',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  routeContainer: {
    flexDirection: 'row',
    gap: 12,
    paddingLeft: 4,
  },
  timeline: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  line: {
    width: 0,
    height: 24,
    borderLeftWidth: 2,
    borderStyle: 'dotted',
  },
  locations: {
    flex: 1,
    gap: 16,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    gap: 8,
    paddingTop: 12,
    marginTop: 12,
    borderTopWidth: 1,
  },
  repeatButton: {
    flex: 1,
    height: 40,
    borderRadius: Layout.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  repeatButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1c190d',
  },
  moreButton: {
    width: 40,
    height: 40,
    borderRadius: Layout.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
