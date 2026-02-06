import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  useColorScheme
} from 'react-native';
import { Colors } from '../constants/Colors';
import { Layout } from '../constants/Layout';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftElement?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  leftElement,
  style,
  ...props
}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme as 'light' | 'dark'];

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, { color: colors.text, opacity: 0.6 }]}>{label}</Text>}
      <View style={[
        styles.inputContainer,
        {
          backgroundColor: colors.card,
          borderColor: error ? colors.error : colors.border
        }
      ]}>
        {leftElement}
        <TextInput
          style={[styles.input, { color: colors.text }, style]}
          placeholderTextColor={colors.placeholder}
          {...props}
        />
      </View>
      {error && <Text style={[styles.error, { color: colors.error }]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: Layout.borderRadius.xl,
    height: 64,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    height: '100%',
  },
  error: {
    fontSize: 12,
    marginTop: 4,
    paddingHorizontal: 4,
  },
});
