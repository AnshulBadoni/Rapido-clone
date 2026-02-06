import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Header } from '../../components/Header';
import { Layout } from '../../constants/Layout';

export default function ProfileScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme as 'light' | 'dark'];

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", style: "destructive", onPress: () => router.replace('/') }
      ]
    );
  };

  const menuItems = [
    {
      icon: 'account-balance-wallet',
      title: 'Payments & Wallet',
      subtitle: 'Balance: ₹245.50',
      subtitleColor: '#16a34a',
      onPress: () => router.push('/profile/payments')
    },
    { icon: 'shield-with-heart', title: 'Safety & SOS Settings' },
    { icon: 'location-on', title: 'My Addresses', subtitle: 'Home, Work' },
    { icon: 'translate', title: 'Language', subtitle: 'English (India)' },
    { icon: 'help', title: 'Support & FAQ' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="Profile" showBack={false} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.profileSection, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
          <View style={styles.avatarContainer}>
             <View style={[styles.avatar, { borderColor: colors.primary + '33', borderWidth: 4 }]}>
                <MaterialIcons name="person" size={48} color={colors.text} />
             </View>
             <TouchableOpacity style={[styles.editBadge, { backgroundColor: colors.primary, borderColor: colors.card }]}>
                <MaterialIcons name="edit" size={16} color="#1c190d" />
             </TouchableOpacity>
          </View>
          <View style={styles.userInfo}>
             <Text style={[styles.userName, { color: colors.text }]}>Arjun Sharma</Text>
             <Text style={[styles.userPhone, { color: colors.muted }]}>+91 98765 43210</Text>
          </View>
        </View>

        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.menuItem, { backgroundColor: colors.card }]}
              onPress={item.onPress}
            >
              <View style={styles.menuItemLeft}>
                <View style={[styles.iconBox, { backgroundColor: colors.primary + '1a' }]}>
                  <MaterialIcons name={item.icon as any} size={24} color={colors.primary} />
                </View>
                <View>
                  <Text style={[styles.menuItemTitle, { color: colors.text }]}>{item.title}</Text>
                  {item.subtitle && (
                    <Text style={[
                      styles.menuItemSub,
                      { color: item.subtitleColor || colors.muted }
                    ]}>
                      {item.subtitle}
                    </Text>
                  )}
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={24} color={colors.placeholder} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.logoutSection}>
          <TouchableOpacity
            style={[styles.logoutButton, { backgroundColor: colors.card, borderColor: colors.border }]}
            onPress={handleLogout}
          >
            <MaterialIcons name="logout" size={20} color={colors.error} />
            <Text style={[styles.logoutText, { color: colors.error }]}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.versionSection}>
          <Text style={[styles.versionText, { color: colors.placeholder }]}>APP VERSION 4.12.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    gap: 16,
    borderBottomWidth: 1,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userPhone: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
  },
  menuSection: {
    marginTop: 16,
    gap: 1,
    backgroundColor: '#e8e4ce33',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  menuItemSub: {
    fontSize: 12,
  },
  logoutSection: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  versionSection: {
    marginTop: 48,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
  }
});
