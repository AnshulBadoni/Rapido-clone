import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Header } from '../../components/Header';
import { RideCard } from '../../components/RideCard';

export default function ActivityScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme as 'light' | 'dark'];
  const [activeTab, setActiveTab] = useState('Rides');

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="My Activity" showBack={false} />

      {/* Segmented Control */}
      <View style={styles.tabContainer}>
        <View style={[styles.segmentedControl, { backgroundColor: colors.border + '33' }]}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Rides' && { backgroundColor: colors.card }]}
            onPress={() => setActiveTab('Rides')}
          >
            <Text style={[
              styles.tabText,
              { color: activeTab === 'Rides' ? colors.text : colors.muted }
            ]}>Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Deliveries' && { backgroundColor: colors.card }]}
            onPress={() => setActiveTab('Deliveries')}
          >
            <Text style={[
              styles.tabText,
              { color: activeTab === 'Deliveries' ? colors.text : colors.muted }
            ]}>Deliveries</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <RideCard
          type="Bike"
          amount="₹142.00"
          date="Oct 24, 10:30 AM"
          status="Completed"
          pickup="12th Main Rd, Indiranagar"
          dropoff="Koramangala 4th Block"
          onPress={() => router.push('/ride/summary')}
        />

        <RideCard
          type="Auto"
          amount="₹210.00"
          date="Oct 23, 06:15 PM"
          status="Completed"
          pickup="MG Road Metro Station"
          dropoff="Phoenix Marketcity"
          onPress={() => router.push('/ride/summary')}
        />

        {/* Map Snippet Mock */}
        <View style={[styles.mapSnippet, { backgroundColor: colors.border + '33' }]}>
           <Text style={[styles.mapSnippetText, { color: colors.text }]}>VIEW MAP HISTORY</Text>
        </View>

        <RideCard
          type="Bike"
          amount="₹0.00"
          date="Oct 22, 09:00 AM"
          status="Cancelled"
          pickup="Whitefield Main Rd"
          dropoff="ITPL Main Entrance"
          repeatable={false}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    padding: 16,
  },
  segmentedControl: {
    flexDirection: 'row',
    height: 44,
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  mapSnippet: {
    height: 128,
    borderRadius: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  mapSnippetText: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#ffffffcc',
    borderRadius: 4,
    position: 'absolute',
    bottom: 8,
    left: 8,
  }
});
