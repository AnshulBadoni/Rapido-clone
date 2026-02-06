import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { Header } from '../../components/Header';
import { Layout } from '../../constants/Layout';

export default function AlertsScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme as 'light' | 'dark'];
  const [activeTab, setActiveTab] = useState('Offers');

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="Notifications & Offers" showBack={false} />

      <View style={styles.tabContainer}>
        <View style={[styles.segmentedControl, { backgroundColor: colors.border + '33' }]}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Offers' && { backgroundColor: colors.card }]}
            onPress={() => setActiveTab('Offers')}
          >
            <Text style={[
              styles.tabText,
              { color: activeTab === 'Offers' ? colors.text : colors.muted }
            ]}>Offers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Notifications' && { backgroundColor: colors.card }]}
            onPress={() => setActiveTab('Notifications')}
          >
            <Text style={[
              styles.tabText,
              { color: activeTab === 'Notifications' ? colors.text : colors.muted }
            ]}>Notifications</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {activeTab === 'Offers' ? (
          <>
            <View style={[styles.offerCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.offerHeader}>
                <View style={[styles.offerIcon, { backgroundColor: colors.primary }]}>
                  <MaterialIcons name="directions-bike" size={24} color="#1c190d" />
                </View>
                <View style={styles.offerInfo}>
                  <Text style={[styles.offerTitle, { color: colors.text }]}>50% OFF</Text>
                  <Text style={[styles.offerSub, { color: colors.muted }]}>On your next ride</Text>
                </View>
                <View style={styles.activeBadge}>
                  <Text style={styles.activeBadgeText}>Active</Text>
                </View>
              </View>
              <View style={[styles.codeBox, { backgroundColor: colors.border + '33', borderStyle: 'dashed', borderWidth: 1, borderColor: colors.border }]}>
                <Text style={[styles.codeText, { color: colors.text }]}>RIDE50NEW</Text>
                <TouchableOpacity style={styles.copyButton}>
                  <MaterialIcons name="content-copy" size={16} color={colors.primary} />
                  <Text style={[styles.copyText, { color: colors.primary }]}>Copy Code</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.offerCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.offerHeader}>
                <View style={[styles.offerIcon, { backgroundColor: '#1c190d' }]}>
                  <MaterialIcons name="delivery-dining" size={24} color={colors.primary} />
                </View>
                <View style={styles.offerInfo}>
                  <Text style={[styles.offerTitle, { color: colors.text }]}>FREE Delivery</Text>
                  <Text style={[styles.offerSub, { color: colors.muted }]}>Orders above ₹149</Text>
                </View>
              </View>
              <View style={[styles.codeBox, { backgroundColor: colors.border + '33', borderStyle: 'dashed', borderWidth: 1, borderColor: colors.border }]}>
                <Text style={[styles.codeText, { color: colors.text }]}>FREEDEL</Text>
                <TouchableOpacity style={styles.copyButton}>
                  <MaterialIcons name="content-copy" size={16} color={colors.primary} />
                  <Text style={[styles.copyText, { color: colors.primary }]}>Copy Code</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.offerCard, { backgroundColor: colors.card, borderColor: colors.border, opacity: 0.8 }]}>
              <View style={styles.offerHeader}>
                <View style={[styles.offerIcon, { backgroundColor: colors.border + '33' }]}>
                  <MaterialIcons name="payments" size={24} color={colors.placeholder} />
                </View>
                <View style={styles.offerInfo}>
                  <Text style={[styles.offerTitle, { color: colors.text }]}>₹20 Cashback</Text>
                  <Text style={[styles.offerSub, { color: colors.muted }]}>On using Wallet payment</Text>
                </View>
                <View style={styles.expiredBadge}>
                  <Text style={styles.expiredBadgeText}>Expired</Text>
                </View>
              </View>
            </View>
          </>
        ) : (
          <View style={styles.notificationsList}>
             <Text style={[styles.sectionTitle, { color: colors.placeholder }]}>RECENT UPDATES</Text>

             <View style={[styles.notificationItem, { borderBottomColor: colors.border }]}>
                <View style={[styles.notifIcon, { backgroundColor: '#3b82f61a' }]}>
                   <MaterialIcons name="info" size={20} color="#3b82f6" />
                </View>
                <View style={styles.notifContent}>
                   <View style={styles.notifHeader}>
                      <Text style={[styles.notifTitle, { color: colors.text }]}>System Update</Text>
                      <Text style={[styles.notifTime, { color: colors.muted }]}>2m ago</Text>
                   </View>
                   <Text style={[styles.notifSub, { color: colors.muted }]}>We've updated our terms of service for better safety protocols.</Text>
                </View>
             </View>

             <View style={[styles.notificationItem, { borderBottomColor: colors.border }]}>
                <View style={[styles.notifIcon, { backgroundColor: colors.primary + '1a' }]}>
                   <MaterialIcons name="check-circle" size={20} color={colors.primary} />
                </View>
                <View style={styles.notifContent}>
                   <View style={styles.notifHeader}>
                      <Text style={[styles.notifTitle, { color: colors.text }]}>Trip Completed</Text>
                      <Text style={[styles.notifTime, { color: colors.muted }]}>1h ago</Text>
                   </View>
                   <Text style={[styles.notifSub, { color: colors.muted }]}>Your ride from Indiranagar to Koramangala was completed. Rate your driver!</Text>
                </View>
             </View>

             <View style={[styles.notificationItem, { borderBottomColor: colors.border }]}>
                <View style={[styles.notifIcon, { backgroundColor: '#ef44441a' }]}>
                   <MaterialIcons name="warning" size={20} color="#ef4444" />
                </View>
                <View style={styles.notifContent}>
                   <View style={styles.notifHeader}>
                      <Text style={[styles.notifTitle, { color: colors.text }]}>Payment Failed</Text>
                      <Text style={[styles.notifTime, { color: colors.muted }]}>Yesterday</Text>
                   </View>
                   <Text style={[styles.notifSub, { color: colors.muted }]}>Payment for your last ride was unsuccessful. Please check your wallet.</Text>
                </View>
             </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    paddingHorizontal: 24,
    marginTop: 16,
    marginBottom: 24,
  },
  segmentedControl: {
    flexDirection: 'row',
    height: 48,
    borderRadius: 16,
    padding: 4,
  },
  tab: {
    flex: 1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  offerCard: {
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    marginBottom: 16,
  },
  offerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  offerIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerInfo: {
    flex: 1,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  offerSub: {
    fontSize: 12,
  },
  activeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#22c55e1a',
    borderRadius: 99,
  },
  activeBadgeText: {
    color: '#22c55e',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  expiredBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#e8e4ce33',
    borderRadius: 99,
  },
  expiredBadgeText: {
    color: '#9c8e49',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  codeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
  },
  codeText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  copyText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  notificationsList: {
    gap: 0,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 12,
  },
  notificationItem: {
    flexDirection: 'row',
    gap: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  notifIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifContent: {
    flex: 1,
  },
  notifHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  notifTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  notifTime: {
    fontSize: 10,
  },
  notifSub: {
    fontSize: 12,
    marginTop: 4,
    lineHeight: 18,
  }
});
