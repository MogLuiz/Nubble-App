import {create} from 'zustand';
import {ToastService} from './toastTypes';

const useToastStore = create<ToastService>(set => ({
  toast: null,
  showToast: toast => set({toast}),
  hideToast: () => set({toast: null}),
}));

export const useToastZustand = (): ToastService => useToastStore();
