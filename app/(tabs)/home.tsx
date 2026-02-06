import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
  Image,
  TextInput
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { MapPlaceholder } from '../../components/MapPlaceholder';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme as 'light' | 'dark'];
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Map Background */}
      <View style={styles.mapContainer}>
        <MapPlaceholder />
      </View>

      {/* Top Nav Overlay */}
      <View style={[styles.topOverlay, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: colors.card }]}>
          <MaterialIcons name="menu" size={24} color={colors.text} />
        </TouchableOpacity>
        <View style={styles.topRight}>
          <TouchableOpacity style={[styles.iconButton, { backgroundColor: colors.card }]}>
            <MaterialIcons name="notifications" size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.profileButton, { borderColor: colors.primary }]}
            onPress={() => router.push('/(tabs)/profile')}
          >
            <View style={styles.mockAvatar}>
               <MaterialIcons name="person" size={24} color={colors.text} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Floating Search Area */}
      <View style={styles.searchContainer}>
        <View style={[styles.searchBox, { backgroundColor: colors.card }]}>
          <View style={styles.searchTimeline}>
            <View style={[styles.searchDot, { backgroundColor: '#3b82f6' }]} />
            <View style={[styles.searchLine, { backgroundColor: colors.border }]} />
            <View style={[styles.searchDot, { backgroundColor: colors.primary }]} />
          </View>
          <View style={styles.searchInputs}>
            <Text style={[styles.locationLabel, { color: colors.muted }]}>Your location</Text>
            <Text style={[styles.locationText, { color: colors.text }]} numberOfLines={1}>Indiranagar, 12th Main Rd</Text>
            <View style={[styles.divider, { backgroundColor: colors.border }]} />
            <TouchableOpacity
              style={styles.destinationInput}
              onPress={() => router.push('/booking/select')}
            >
              <MaterialIcons name="search" size={20} color={colors.primary} />
              <Text style={[styles.placeholderText, { color: colors.placeholder }]}>Where to?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.flex} />

      {/* Bottom Sheet UI */}
      <View style={[styles.bottomSheet, { backgroundColor: colors.card }]}>
        <View style={[styles.handle, { backgroundColor: colors.border }]} />

        {/* Service Grid */}
        <View style={styles.serviceGrid}>
          <TouchableOpacity
            style={[styles.serviceItem, { backgroundColor: colors.primary + '1a', borderColor: colors.primary + '33', borderWidth: 2 }]}
            onPress={() => router.push('/booking/select')}
          >
            <View style={[styles.serviceIcon, { backgroundColor: colors.primary }]}>
              <MaterialIcons name="pedal-bike" size={30} color="#1c190d" />
            </View>
            <Text style={[styles.serviceName, { color: colors.text }]}>Bike</Text>
            <Text style={[styles.serviceSub, { color: colors.muted }]}>Fast & Easy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.serviceItem, { backgroundColor: colors.border + '1a' }]}>
            <View style={[styles.serviceIcon, { backgroundColor: colors.border }]}>
              <MaterialIcons name="electric-rickshaw" size={30} color={colors.muted} />
            </View>
            <Text style={[styles.serviceName, { color: colors.text }]}>Auto</Text>
            <Text style={[styles.serviceSub, { color: colors.muted }]}>Comfortable</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.serviceItem, { backgroundColor: colors.border + '1a' }]}>
            <View style={[styles.serviceIcon, { backgroundColor: colors.border }]}>
              <MaterialIcons name="local-shipping" size={30} color={colors.muted} />
            </View>
            <Text style={[styles.serviceName, { color: colors.text }]}>Delivery</Text>
            <Text style={[styles.serviceSub, { color: colors.muted }]}>Instant</Text>
          </TouchableOpacity>
        </View>

        {/* Recommended */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Recommended for you</Text>
          <TouchableOpacity>
            <Text style={[styles.viewAll, { color: colors.primary }]}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recommendations}>
          <TouchableOpacity style={styles.recommendationItem}>
            <View style={[styles.recIcon, { backgroundColor: '#3b82f61a' }]}>
              <MaterialIcons name="home" size={24} color="#3b82f6" />
            </View>
            <View style={[styles.recInfo, { borderBottomColor: colors.border }]}>
              <Text style={[styles.recName, { color: colors.text }]}>Home</Text>
              <Text style={[styles.recSub, { color: colors.muted }]} numberOfLines={1}>2nd Cross, HAL 2nd Stage, Indiranagar</Text>
            </View>
            <Text style={[styles.recTime, { color: colors.muted }]}>12 min</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.recommendationItem}>
            <View style={[styles.recIcon, { backgroundColor: '#f973161a' }]}>
              <MaterialIcons name="work" size={24} color="#f97316" />
            </View>
            <View style={[styles.recInfo, { borderBottomColor: colors.border }]}>
              <Text style={[styles.recName, { color: colors.text }]}>Work</Text>
              <Text style={[styles.recSub, { color: colors.muted }]} numberOfLines={1}>Bagmane Tech Park, Byrasandra</Text>
            </View>
            <Text style={[styles.recTime, { color: colors.muted }]}>25 min</Text>
          </TouchableOpacity>
        </View>

        {/* Promotion */}
        <View style={[styles.promoCard, { backgroundColor: colorScheme === 'dark' ? colors.primary + '1a' : '#1c190d' }]}>
          <View>
            <Text style={[styles.promoLabel, { color: colors.primary }]}>Limited Offer</Text>
            <Text style={styles.promoText}>Get 50% OFF on your next 5 bike rides</Text>
          </View>
          <TouchableOpacity style={[styles.promoButton, { backgroundColor: colors.primary }]}>
            <Text style={styles.promoButtonText}>Claim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  topOverlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    zIndex: 10,
  },
  topRight: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    overflow: 'hidden',
  },
  mockAvatar: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
    zIndex: 10,
  },
  searchBox: {
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  searchTimeline: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  searchDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  searchLine: {
    width: 2,
    height: 16,
    marginVertical: 4,
  },
  searchInputs: {
    flex: 1,
  },
  locationLabel: {
    fontSize: 10,
    fontWeight: '600',
    marginBottom: 4,
  },
  locationText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    marginVertical: 8,
  },
  destinationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  placeholderText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomSheet: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 16,
    paddingBottom: 40,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  handle: {
    width: 48,
    height: 6,
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 24,
  },
  serviceGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  serviceItem: {
    width: (Layout.window.width - 32 - 16) / 3,
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  serviceIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  serviceSub: {
    fontSize: 10,
    fontWeight: '500',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  recommendations: {
    gap: 4,
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  recIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recInfo: {
    flex: 1,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  recName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  recSub: {
    fontSize: 12,
  },
  recTime: {
    fontSize: 12,
    fontWeight: '600',
  },
  promoCard: {
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  promoLabel: {
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  promoText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  promoButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  promoButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1c190d',
  }
});
