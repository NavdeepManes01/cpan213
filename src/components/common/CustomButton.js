import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {Colors, Fonts, Spacing, GlobalStyles} from '../../styles/globalStyles';

const CustomButton = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.buttonDisabled,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={title}
      {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={Colors.text.light} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    ...GlobalStyles.button,
    minHeight: 50,
    justifyContent: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  text: {
    ...GlobalStyles.buttonText,
    textAlign: 'center',
  },
});

export default CustomButton;