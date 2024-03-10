import {AuthStackParams, AppStackParams} from '@routes';
import {AppTabNavigatorStackParams} from '@/routes/AppTabNavigator';

import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthScreenParams<T extends keyof AuthStackParams> =
  NativeStackScreenProps<AuthStackParams, T>;

export type AppScreenParams<T extends keyof AppStackParams> =
  NativeStackScreenProps<AppStackParams, T>;

export type AppTabScreenParams<
  RouteName extends keyof AppTabNavigatorStackParams,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabNavigatorStackParams, RouteName>,
  NativeStackScreenProps<AppStackParams, 'AppTabNavigator'>
>;
