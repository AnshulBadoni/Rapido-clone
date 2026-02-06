import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

export default function PhoneEntryScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme as 'light' | 'dark'];
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="" showBack={true} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.branding}>
            <View style={[styles.logoBadge, { backgroundColor: colors.primary }]}>
               <Text style={styles.logoBadgeText}>RAPIDO</Text>
            </View>
          </View>

          <View style={styles.headerText}>
            <Text style={[styles.title, { color: colors.text }]}>Get Started with Rapido</Text>
            <Text style={[styles.subtitle, { color: colors.muted }]}>We'll send an OTP for verification.</Text>
          </View>

          <Input
            label="Mobile Number"
            placeholder="000 000 0000"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            leftElement={
              <TouchableOpacity style={[styles.countryPicker, { borderRightColor: colors.border }]}>
                <View style={styles.flag} />
                <Text style={[styles.countryCode, { color: colors.text }]}>+91</Text>
                <MaterialIcons name="expand-more" size={20} color={colors.text} />
              </TouchableOpacity>
            }
          />

          <View style={styles.patternContainer}>
            {/* Visual decoration matching design */}
            <View style={[styles.pattern, { opacity: colorScheme === 'dark' ? 0.05 : 0.1 }]}>
               <MaterialIcons name="grid-on" size={200} color={colors.primary} />
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Text style={[styles.termsText, { color: colors.muted }]}>
            By continuing, you agree to our{' '}
            <Text style={[styles.link, { color: colors.text }]}>Terms of Service</Text>
            {' '}and{' '}
            <Text style={[styles.link, { color: colors.text }]}>Privacy Policy</Text>.
          </Text>
          <Button
            title="Proceed"
            onPress={() => router.push('/login/otp')}
            icon={<MaterialIcons name="arrow-forward" size={20} color="#1c190d" />}
            disabled={phoneNumber.length < 10}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  branding: {
    marginBottom: 24,
  },
  logoBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  logoBadgeText: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  headerText: {
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 36,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
    marginRight: 12,
    borderRightWidth: 1,
    height: 32,
  },
  flag: {
    width: 24,
    height: 16,
    backgroundColor: '#ff9933', // India flag colors mock
    borderRadius: 2,
    marginRight: 8,
  },
  countryCode: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 4,
  },
  patternContainer: {
    height: 160,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pattern: {
    transform: [{ rotate: '45deg' }],
  },
  footer: {
    padding: 24,
    paddingBottom: 40,
  },
  termsText: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 24,
  },
  link: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
});
