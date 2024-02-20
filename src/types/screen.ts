import {RootStackParams} from '@routes';
import {AppStackParams} from '@/routes/AppStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthScreenParams<T extends keyof RootStackParams> =
  NativeStackScreenProps<RootStackParams, T>;

export type AppScreenParams<T extends keyof AppStackParams> =
  NativeStackScreenProps<AppStackParams, T>;
