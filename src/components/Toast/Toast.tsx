import React from 'react';
import {Animated} from 'react-native';

import {useToastData} from '@services/toast/useToast';
import {ToastContent} from './parts/ToastContent';
import {useToastAction} from './hooks/useToastAction';

export function Toast() {
  const toast = useToastData();
  const {fadeAnim} = useToastAction(toast);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View
      style={{position: 'absolute', alignSelf: 'center', opacity: fadeAnim}}>
      <ToastContent toast={toast} />
    </Animated.View>
  );
}
