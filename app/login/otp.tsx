import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  SafeAreaView
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

export default function OTPVerificationScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme as 'light' | 'dark'];
  const [otp, setOtp] = useState(['', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyPress = (key: string | number) => {
    if (key === 'back') {
      const newOtp = [...otp];
      const indexToClear = otp[activeIndex] === '' ? Math.max(0, activeIndex - 1) : activeIndex;
      newOtp[indexToClear] = '';
      setOtp(newOtp);
      setActiveIndex(indexToClear);
    } else if (key === 'check') {
      if (otp.join('').length === 4) {
        router.replace('/(tabs)/home');
      }
    } else {
      if (activeIndex < 4) {
        const newOtp = [...otp];
        newOtp[activeIndex] = key.toString();
        setOtp(newOtp);
        setActiveIndex(Math.min(3, activeIndex + 1));
      }
    }
  };

  useEffect(() => {
    if (otp.join('').length === 4) {
      // Auto-verify simulation
    }
  }, [otp]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="Verify Details" showBack={true} />

      <View style={styles.content}>
        <View style={styles.headerText}>
          <Text style={[styles.title, { color: colors.text }]}>Enter OTP</Text>
          <Text style={[styles.subtitle, { color: colors.muted }]}>
            We have sent a 4-digit verification code to{' '}
            <Text style={{ color: colors.text, fontWeight: 'bold' }}>+91 98765 43210</Text>
          </Text>
          <TouchableOpacity style={styles.editButton} onPress={() => router.back()}>
            <Text style={[styles.editText, { color: colors.primary }]}>Edit Number</Text>
            <MaterialIcons name="edit" size={14} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <View
              key={index}
              style={[
                styles.otpInput,
                {
                  backgroundColor: colors.card,
                  borderColor: index === activeIndex ? colors.primary : (digit ? colors.primary : colors.border)
                }
              ]}
            >
              <Text style={[styles.otpDigit, { color: colors.text }]}>{digit}</Text>
            </View>
          ))}
        </View>

        <View style={styles.resendContainer}>
          <Text style={[styles.resendText, { color: colors.muted }]}>
            Didn't receive the code?{' '}
            <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Resend in 00:25</Text>
          </Text>
        </View>

        <Button
          title="Verify & Proceed"
          onPress={() => router.replace('/(tabs)/home')}
          disabled={otp.join('').length < 4}
          icon={<MaterialIcons name="arrow-forward" size={20} color="#1c190d" />}
        />

        <View style={styles.keypadContainer}>
          <View style={[styles.keypad, { backgroundColor: colors.border + '33' }]}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'back', 0, 'check'].map((key, index) => (
              <TouchableOpacity
                key={index}
                style={styles.key}
                onPress={() => handleKeyPress(key as any)}
              >
                {key === 'back' ? (
                  <MaterialIcons name="backspace" size={24} color={colors.text} />
                ) : key === 'check' ? (
                  <MaterialIcons name="check-circle" size={24} color={colors.primary} />
                ) : (
                  <Text style={[styles.keyText, { color: colors.text }]}>{key}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  headerText: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  editText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  otpInput: {
    width: (Layout.window.width - 48 - 48) / 4,
    aspectRatio: 1,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpDigit: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  resendText: {
    fontSize: 14,
  },
  keypadContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 32,
    padding: 8,
  },
  key: {
    width: '33.33%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: {
    fontSize: 24,
    fontWeight: '600',
  }
});
