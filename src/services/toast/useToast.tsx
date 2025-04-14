import {ToastService} from './toastTypes';
import {useToastZustand, useToastZustandActions} from './useToastZustand';

export const useToastData = (): ToastService['toast'] => useToastZustand();

export const useToastActions = (): Pick<
  ToastService,
  'showToast' | 'hideToast'
> => useToastZustandActions();
