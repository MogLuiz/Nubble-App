import {AppStackParams, AuthStackParams} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParams, AuthStackParams {}
  }
}
