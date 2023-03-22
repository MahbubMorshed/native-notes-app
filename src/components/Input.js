import { TextInput, StyleSheet } from "react-native";
import React from "react";

const Input = ({
  placeholder,
  secureTextEntry,
  onChangeText,
  value,
  autoCapitalize,
  multiline,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize={autoCapitalize}
      multiline={multiline}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 25,
  },
});
