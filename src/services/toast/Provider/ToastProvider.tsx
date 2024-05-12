import React, {createContext, useState} from 'react';
import {Toast, ToastService} from '@services/toast/toastTypes';

const defaultToastInitialValue: ToastService = {
  toast: null,
  showToast: () => {},
  hiddenToast: () => {},
};

export const ToastContext = createContext<ToastService>(
  defaultToastInitialValue,
);

export function ToastProvider({children}: React.PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: Toast) {
    setToast(_toast);
  }

  function hiddenToast() {
    setToast(null);
  }

  return (
    <ToastContext.Provider value={{toast, showToast, hiddenToast}}>
      {children}
    </ToastContext.Provider>
  );
}
