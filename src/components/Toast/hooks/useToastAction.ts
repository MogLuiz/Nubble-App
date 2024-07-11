import {useCallback, useRef, useEffect} from 'react';
import {Animated} from 'react-native';

import {Toast} from '@/services/toast/toastTypes';
import {useToastActions} from '@services/toast/useToast';

const DEFAULT_DURATION = 2000;

export const useToastAction = (toast: Toast | null) => {
  const {hideToast} = useToastActions();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const runExitingAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeAnim],
  );

  useEffect(() => {
    if (toast) {
      runEnteringAnimation();

      setTimeout(() => {
        runExitingAnimation(hideToast);
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [toast, runEnteringAnimation, runExitingAnimation, hideToast]);

  return {fadeAnim};
};
