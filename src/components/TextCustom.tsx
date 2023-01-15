import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

type Props = {
  children: React.ReactNode;
  style: TextStyle;
};

export const TextCustom = ({ children, style }: Props) => {
  let stylePattern = styles.text;

  if (style?.fontWeight === 'bold') {
    stylePattern = styles.textBold;
  }
  return <Text style={[style, stylePattern]}> {children} </Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
  },
  textBold: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'normal',
  },
});
