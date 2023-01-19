import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { TextCustom } from './TextCustom';

type Props = {
  name: string;
  children?: React.ReactNode;
};

export const ButtonCustom = ({ children, name }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <TextCustom style={styles.textButton}>{name}</TextCustom>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    marginVertical: 16,
    paddingVertical: 16,
    backgroundColor: '#2A9F85',
  },
  textButton: {
    fontSize: 16,
    lineHeight: 26,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
