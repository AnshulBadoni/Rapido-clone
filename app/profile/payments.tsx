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
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

export default function PaymentsScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme as 'light' | 'dark'];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="Payment Methods" showBack={true} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.walletCard, { backgroundColor: '#1c190d' }]}>
           <View style={styles.walletHeader}>
              <MaterialIcons name="account-balance-wallet" size={20} color={colors.primary} />
              <Text style={styles.walletLabel}>Total Balance</Text>
           </View>
           <View style={styles.walletBody}>
              <View>
                 <Text style={styles.balanceText}>₹452.50</Text>
                 <Text style={styles.walletMeta}>SECURE WALLET</Text>
              </View>
              <TouchableOpacity style={[styles.topUpBtn, { backgroundColor: colors.primary }]}>
                 <MaterialIcons name="add" size={20} color="#1c190d" />
                 <Text style={styles.topUpText}>Top Up</Text>
              </TouchableOpacity>
           </View>
        </View>

        <View style={styles.section}>
           <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>Saved Methods</Text>
              <Text style={[styles.sectionBadge, { color: colors.muted }]}>3 ACTIVE</Text>
           </View>

           <View style={styles.subSection}>
              <Text style={[styles.subSectionTitle, { color: colors.muted }]}>UPI IDS</Text>
              <View style={[styles.paymentItem, { backgroundColor: colors.card, borderColor: colors.border }]}>
                 <View style={[styles.paymentIcon, { backgroundColor: '#4f46e51a' }]}>
                    <MaterialIcons name="payments" size={24} color="#4f46e5" />
                 </View>
                 <View style={styles.paymentInfo}>
                    <Text style={[styles.paymentTitle, { color: colors.text }]}>johndoe@okaxis</Text>
                    <Text style={[styles.paymentSub, { color: colors.muted }]}>Primary UPI ID</Text>
                 </View>
                 <View style={[styles.radioActive, { borderColor: colors.primary }]}>
                    <View style={[styles.radioInner, { backgroundColor: colors.primary }]} />
                 </View>
              </View>
           </View>

           <View style={styles.subSection}>
              <Text style={[styles.subSectionTitle, { color: colors.muted }]}>CREDIT & DEBIT CARDS</Text>
              <View style={[styles.paymentItem, { backgroundColor: colors.card, borderColor: colors.border }]}>
                 <View style={[styles.paymentIcon, { backgroundColor: colors.border + '33' }]}>
                    <MaterialIcons name="credit-card" size={24} color={colors.placeholder} />
                 </View>
                 <View style={styles.paymentInfo}>
                    <Text style={[styles.paymentTitle, { color: colors.text }]}>•••• •••• •••• 4242</Text>
                    <Text style={[styles.paymentSub, { color: colors.muted }]}>Visa Platinum · Expires 12/28</Text>
                 </View>
                 <TouchableOpacity>
                    <MaterialIcons name="more-vert" size={24} color={colors.placeholder} />
                 </TouchableOpacity>
              </View>
           </View>

           <View style={styles.subSection}>
              <Text style={[styles.subSectionTitle, { color: colors.muted }]}>DIGITAL WALLETS</Text>
              <View style={[styles.paymentItem, { backgroundColor: colors.card, borderColor: colors.border, opacity: 0.7 }]}>
                 <View style={[styles.paymentIcon, { backgroundColor: '#3b82f61a' }]}>
                    <MaterialIcons name="account-balance" size={24} color="#3b82f6" />
                 </View>
                 <View style={styles.paymentInfo}>
                    <Text style={[styles.paymentTitle, { color: colors.text }]}>Paytm Wallet</Text>
                    <Text style={[styles.paymentSub, { color: colors.error }]}>Insufficient balance</Text>
                 </View>
                 <MaterialIcons name="chevron-right" size={24} color={colors.placeholder} />
              </View>
           </View>
        </View>
      </ScrollView>

      <View style={[styles.footer, { backgroundColor: colors.card, borderTopColor: colors.border }]}>
         <TouchableOpacity style={[styles.addBtn, { backgroundColor: colors.border + '33', borderColor: colors.border }]}>
            <MaterialIcons name="add-circle" size={24} color={colors.text} />
            <Text style={[styles.addBtnText, { color: colors.text }]}>Add New Payment Method</Text>
         </TouchableOpacity>

         <View style={styles.securityInfo}>
            <View style={styles.securityHeader}>
               <MaterialIcons name="verified-user" size={12} color={colors.muted} />
               <Text style={[styles.securityLabel, { color: colors.muted }]}>PCI-DSS COMPLIANT</Text>
            </View>
            <Text style={[styles.securityText, { color: colors.muted }]}>
               Your payment information is encrypted and securely stored by our partner banks.
            </Text>
         </View>
         <View style={[styles.indicator, { backgroundColor: colors.border }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  walletCard: {
    padding: 24,
    borderRadius: 32,
    marginBottom: 24,
  },
  walletHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  walletLabel: {
    color: '#9c8e49',
    fontSize: 14,
    fontWeight: '500',
  },
  walletBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  balanceText: {
    color: 'white',
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: -1,
  },
  walletMeta: {
    color: '#6b5f2a',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 8,
  },
  topUpBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  topUpText: {
    color: '#1c190d',
    fontSize: 14,
    fontWeight: 'bold',
  },
  section: {
    gap: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionBadge: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  subSection: {
    gap: 12,
  },
  subSectionTitle: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    paddingLeft: 4,
  },
  paymentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
  },
  paymentIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  paymentInfo: {
    flex: 1,
  },
  paymentTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  paymentSub: {
    fontSize: 12,
    marginTop: 4,
  },
  radioActive: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  footer: {
    padding: 24,
    paddingBottom: 40,
    borderTopWidth: 1,
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
  },
  addBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  securityInfo: {
    marginTop: 24,
    alignItems: 'center',
    gap: 8,
  },
  securityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  securityLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  securityText: {
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 14,
    paddingHorizontal: 32,
  },
  indicator: {
    width: 128,
    height: 4,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 24,
  }
});
