import {RootStackParams} from '@/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ScreenParams<T extends keyof RootStackParams> =
  NativeStackScreenProps<RootStackParams, T>;
