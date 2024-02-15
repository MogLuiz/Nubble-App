import {RootStackParams} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {}
  }
}
