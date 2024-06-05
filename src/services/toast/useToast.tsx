import {useContext} from 'react';
import {ToastContext} from './Provider/ToastProvider';
import {ToastService} from './toastTypes';
import {useToastZustand} from './useToastZustand';

const useToastContext = (): ToastService => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('Toast must be used within a ToastProvider');
  }

  return context;
};

export function useToast(): ToastService {
  return useToastZustand();
}
