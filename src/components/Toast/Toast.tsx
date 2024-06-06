import React, {useEffect} from 'react';

import {useToastActions, useToastData} from '@services/toast/useToast';
import {ToastContent} from './parts/ToastContent';

const DEFAULT_DURATION = 2000;

export function Toast() {
  const toast = useToastData();
  const {hideToast} = useToastActions();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [toast]);

  if (!toast) {
    return null;
  }

  return <ToastContent toast={toast} />;
}
