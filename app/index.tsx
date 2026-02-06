import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useColorScheme,
  SafeAreaView
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Layout } from '../constants/Layout';
import { Button } from '../components/Button';

export default function OnboardingScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme as 'light' | 'dark'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={[styles.logoIcon, { backgroundColor: colors.primary }]}>
            <MaterialIcons name="pedal-bike" size={20} color="#1c190d" />
          </View>
          <Text style={[styles.logoText, { color: colors.text }]}>Rapido</Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={[styles.skipText, { color: colors.muted }]}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={[styles.heroImageContainer, { backgroundColor: colors.primary + '22' }]}>
          {/* Mock image container */}
          <View style={styles.mockImage}>
             <MaterialIcons name="directions-bike" size={120} color={colors.primary} />
          </View>
        </View>

        <View style={styles.textContent}>
          <Text style={[styles.title, { color: colors.text }]}>
            Fastest way to{'\n'}beat traffic
          </Text>
          <Text style={[styles.description, { color: colors.muted }]}>
            Skip the jams and reach your destination on time with our agile bike taxis.
          </Text>
        </View>

        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot, { backgroundColor: colors.primary }]} />
          <View style={[styles.dot, { backgroundColor: colors.border }]} />
          <View style={[styles.dot, { backgroundColor: colors.border }]} />
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          title="Get Started"
          onPress={() => router.push('/login')}
          icon={<MaterialIcons name="arrow-forward" size={20} color="#1c190d" />}
        />
        <View style={styles.loginContainer}>
          <Text style={[styles.loginLabel, { color: colors.muted }]}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={[styles.loginText, { color: colors.primary }]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  skipText: {
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  heroImageContainer: {
    width: '100%',
    aspectRatio: 4 / 5,
    borderRadius: 32,
    overflow: 'hidden',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mockImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    marginTop: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom: 16
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 280,
  },
  pagination: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 24,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  activeDot: {
    width: 24,
  },
  footer: {
    padding: 24,
    paddingBottom: 40,
    gap: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  loginText: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});
