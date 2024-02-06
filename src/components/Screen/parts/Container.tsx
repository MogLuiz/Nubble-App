import React from 'react';
import {ScrollView, View} from 'react-native';

interface IContainerProps {
  children?: React.ReactNode;
  scrollable: boolean;
  backgroundColor: string;
}

export const Container = ({
  children,
  scrollable,
  backgroundColor,
}: IContainerProps) => {
  return scrollable ? (
    <ScrollView style={{backgroundColor}}>{children}</ScrollView>
  ) : (
    <View style={{backgroundColor}}>{children}</View>
  );
};
