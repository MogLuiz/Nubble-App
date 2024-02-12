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
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor, flex: 1}}>
      {children}
    </ScrollView>
  ) : (
    <View style={{backgroundColor}}>{children}</View>
  );
};
