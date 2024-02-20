import {AuthStackParams, AppStackParams} from '@routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthScreenParams<T extends keyof AuthStackParams> =
  NativeStackScreenProps<AuthStackParams, T>;

export type AppScreenParams<T extends keyof AppStackParams> =
  NativeStackScreenProps<AppStackParams, T>;
