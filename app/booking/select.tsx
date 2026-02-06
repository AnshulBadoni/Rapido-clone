import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { MapPlaceholder } from '../../components/MapPlaceholder';

export default function VehicleSelectionScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme as 'light' | 'dark'];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Map Background */}
      <View style={styles.mapContainer}>
        <MapPlaceholder />
      </View>

      {/* Header Overlay */}
      <View style={styles.headerOverlay}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={[styles.backButton, { backgroundColor: colors.card }]}
          >
            <MaterialIcons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <View style={[styles.locationCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.timeline}>
               <View style={[styles.dot, { backgroundColor: '#3b82f6' }]} />
               <View style={[styles.line, { backgroundColor: colors.border }]} />
               <View style={[styles.dot, { backgroundColor: colors.primary }]} />
            </View>
            <View style={styles.locationInfo}>
               <Text style={[styles.locSub, { color: colors.muted }]}>Current Location</Text>
               <Text style={[styles.locMain, { color: colors.text }]} numberOfLines={1}>Central Park West</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.flex} />

      {/* Bottom Sheet Wrapper */}
      <View style={[styles.bottomSheet, { backgroundColor: colors.card, borderTopColor: colors.border }]}>
        <View style={[styles.handle, { backgroundColor: colors.border }]} />

        <View style={styles.sheetContent}>
          <View style={styles.sheetHeader}>
            <Text style={[styles.sheetTitle, { color: colors.text }]}>Select your ride</Text>
            <Text style={[styles.sheetSub, { color: colors.muted }]}>Suggested based on your route</Text>
          </View>

          <View style={styles.optionsList}>
            <TouchableOpacity
              style={[styles.option, { borderColor: colors.primary, backgroundColor: colors.primary + '1a', borderWidth: 2 }]}
              onPress={() => router.push('/ride/tracking')}
            >
              <View style={styles.optionLeft}>
                <View style={[styles.optionIcon, { backgroundColor: colors.primary + '33' }]}>
                  <MaterialIcons name="two-wheeler" size={32} color={colors.primary} />
                </View>
                <View>
                  <View style={styles.optionNameRow}>
                    <Text style={[styles.optionName, { color: colors.text }]}>Bike</Text>
                    <View style={[styles.tag, { backgroundColor: colors.primary }]}>
                       <Text style={styles.tagText}>Fastest</Text>
                    </View>
                  </View>
                  <Text style={[styles.optionMeta, { color: colors.muted }]}>3 min away • 12 min trip</Text>
                </View>
              </View>
              <View style={styles.optionRight}>
                 <Text style={[styles.price, { color: colors.text }]}>$4.50</Text>
                 <Text style={[styles.oldPrice, { color: colors.muted }]}>$6.00</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.option, { backgroundColor: colors.border + '1a', borderColor: colors.border, borderWidth: 1 }]}>
              <View style={styles.optionLeft}>
                <View style={[styles.optionIcon, { backgroundColor: colors.border + '33' }]}>
                  <MaterialIcons name="electric-rickshaw" size={32} color={colors.muted} />
                </View>
                <View>
                  <View style={styles.optionNameRow}>
                    <Text style={[styles.optionName, { color: colors.text }]}>Auto</Text>
                    <View style={[styles.tag, { backgroundColor: colors.border + '33' }]}>
                       <Text style={[styles.tagText, { color: colors.muted }]}>Comfort</Text>
                    </View>
                  </View>
                  <Text style={[styles.optionMeta, { color: colors.muted }]}>5 min away</Text>
                </View>
              </View>
              <View style={styles.optionRight}>
                 <Text style={[styles.price, { color: colors.text }]}>$8.20</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.option, { backgroundColor: colors.border + '1a', borderColor: colors.border, borderWidth: 1 }]}>
              <View style={styles.optionLeft}>
                <View style={[styles.optionIcon, { backgroundColor: colors.border + '33' }]}>
                  <MaterialIcons name="directions-car" size={32} color={colors.muted} />
                </View>
                <View>
                  <Text style={[styles.optionName, { color: colors.text }]}>Cab</Text>
                  <Text style={[styles.optionMeta, { color: colors.muted }]}>8 min away</Text>
                </View>
              </View>
              <View style={styles.optionRight}>
                 <Text style={[styles.price, { color: colors.text }]}>$14.50</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.paymentMethod, { backgroundColor: colors.border + '1a' }]}>
             <View style={styles.paymentLeft}>
                <MaterialIcons name="payments" size={20} color={colors.muted} />
                <Text style={[styles.paymentText, { color: colors.text }]}>Cash</Text>
             </View>
             <TouchableOpacity>
                <Text style={[styles.changeText, { color: '#3b82f6' }]}>CHANGE</Text>
             </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.bookButton, { backgroundColor: colors.primary }]}
            onPress={() => router.push('/ride/tracking')}
          >
             <Text style={styles.bookButtonText}>Book Bike</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.fabContainer}>
         <TouchableOpacity style={[styles.fab, { backgroundColor: colors.card }]}>
            <MaterialIcons name="my-location" size={24} color={colors.text} />
         </TouchableOpacity>
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
  headerOverlay: {
    padding: 16,
    paddingTop: 60,
  },
  headerContent: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  locationCard: {
    flex: 1,
    height: 60,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  timeline: {
    alignItems: 'center',
    marginRight: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  line: {
    width: 1,
    height: 16,
    marginVertical: 2,
  },
  locationInfo: {
    flex: 1,
  },
  locSub: {
    fontSize: 10,
    fontWeight: '600',
  },
  locMain: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomSheet: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
  },
  handle: {
    width: 48,
    height: 6,
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  sheetContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  sheetHeader: {
    marginBottom: 16,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sheetSub: {
    fontSize: 12,
  },
  optionsList: {
    gap: 12,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
  },
  optionLeft: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  optionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  tagText: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  optionMeta: {
    fontSize: 12,
    fontWeight: '500',
  },
  optionRight: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 10,
    textDecorationLine: 'line-through',
  },
  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    marginTop: 24,
  },
  paymentLeft: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  paymentText: {
    fontSize: 14,
    fontWeight: '600',
  },
  changeText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  bookButton: {
    marginTop: 16,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#f2cc0d',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c190d',
  },
  fabContainer: {
    position: 'absolute',
    right: 16,
    bottom: 480,
  },
  fab: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  }
});
