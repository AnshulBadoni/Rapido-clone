import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { Button } from '../../components/Button';

export default function RideSummaryScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme as 'light' | 'dark'];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.replace('/(tabs)/home')}
          style={styles.closeButton}
        >
          <MaterialIcons name="close" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Ride Summary</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Map Snapshot Simulation */}
        <View style={[styles.mapHero, { backgroundColor: colors.border + '33' }]}>
           <View style={styles.heroOverlay}>
              <View style={[styles.successBadge, { backgroundColor: colors.primary }]}>
                 <MaterialIcons name="check-circle" size={20} color="#1c190d" />
              </View>
              <Text style={styles.heroText}>Successfully Arrived</Text>
           </View>
        </View>

        <View style={styles.successMessage}>
           <Text style={[styles.successTitle, { color: colors.text }]}>Ride Completed!</Text>
           <Text style={[styles.successSub, { color: colors.muted }]}>Thanks for riding with Rahul</Text>
        </View>

        <View style={styles.statsGrid}>
           <View style={[styles.statItem, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Text style={[styles.statLabel, { color: colors.muted }]}>Fare</Text>
              <Text style={[styles.statValue, { color: colors.text }]}>₹142.00</Text>
           </View>
           <View style={[styles.statItem, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Text style={[styles.statLabel, { color: colors.muted }]}>Distance</Text>
              <Text style={[styles.statValue, { color: colors.text }]}>5.4 km</Text>
           </View>
           <View style={[styles.statItem, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Text style={[styles.statLabel, { color: colors.muted }]}>Duration</Text>
              <Text style={[styles.statValue, { color: colors.text }]}>18 min</Text>
           </View>
        </View>

        <View style={styles.feedbackSection}>
           <View style={styles.ratingContainer}>
              <Text style={[styles.ratingTitle, { color: colors.text }]}>Rate your experience</Text>
              <View style={styles.starsRow}>
                 {[1, 2, 3, 4, 5].map((star) => (
                    <MaterialIcons
                      key={star}
                      name="star"
                      size={40}
                      color={star <= 4 ? colors.primary : colors.border}
                    />
                 ))}
              </View>
           </View>

           <View style={styles.chipsSection}>
              <Text style={[styles.chipsLabel, { color: colors.muted }]}>What went well?</Text>
              <View style={styles.chipsRow}>
                 {['Safe Driving', 'Professional', 'Clean Vehicle', 'Good Communication', 'Efficient Route'].map((chip, idx) => (
                    <TouchableOpacity
                      key={idx}
                      style={[
                        styles.chip,
                        {
                          borderColor: (idx === 0 || idx === 3) ? colors.primary : colors.border,
                          backgroundColor: (idx === 0 || idx === 3) ? colors.primary + '1a' : 'transparent'
                        }
                      ]}
                    >
                       <Text style={[
                         styles.chipText,
                         { color: (idx === 0 || idx === 3) ? colors.text : colors.muted }
                       ]}>{chip}</Text>
                    </TouchableOpacity>
                 ))}
              </View>
           </View>

           <TextInput
             style={[styles.commentBox, { backgroundColor: colors.card, borderColor: colors.border, color: colors.text }]}
             placeholder="Tell us more about your experience (optional)"
             placeholderTextColor={colors.placeholder}
             multiline
             numberOfLines={3}
           />
        </View>
      </ScrollView>

      <View style={[styles.footer, { backgroundColor: colors.background }]}>
         <Button
           title="Submit Feedback"
           onPress={() => router.replace('/(tabs)/home')}
         />
         <TouchableOpacity
           onPress={() => router.replace('/(tabs)/home')}
           style={styles.skipBtn}
         >
            <Text style={[styles.skipText, { color: colors.muted }]}>Skip for now</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  spacer: {
    width: 40,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  mapHero: {
    marginHorizontal: 16,
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  heroOverlay: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    backgroundColor: '#0000004d',
  },
  successBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successMessage: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  successTitle: {
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  successSub: {
    fontSize: 14,
    marginTop: 4,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  statItem: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  feedbackSection: {
    paddingHorizontal: 16,
    gap: 24,
  },
  ratingContainer: {
    alignItems: 'center',
  },
  ratingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  chipsSection: {
    gap: 12,
  },
  chipsLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 99,
    borderWidth: 1,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '600',
  },
  commentBox: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    fontSize: 14,
    textAlignVertical: 'top',
    height: 100,
  },
  footer: {
    padding: 16,
    paddingBottom: 40,
    gap: 12,
  },
  skipBtn: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  skipText: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});
