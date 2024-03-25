import React from 'react';
import {ScrollView, View} from 'react-native';

interface IContainerProps {
  children?: React.ReactNode;
  scrollable: boolean;
  backgroundColor: string;
}

export const ScreenContainer = ({
  children,
  scrollable,
  backgroundColor,
}: IContainerProps) => {
  const styles = {
    backgroundColor,
    flex: 1,
  };

  return scrollable ? (
    <ScrollView keyboardShouldPersistTaps="handled" style={styles}>
      {children}
    </ScrollView>
  ) : (
    <View style={styles}>{children}</View>
  );
};
