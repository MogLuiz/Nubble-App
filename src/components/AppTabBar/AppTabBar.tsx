import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Box} from '@components/Box';
import {Icon} from '@components/Icon';
import {Text} from '@components/Text';
import {TouchableOpacityBox} from '@components/TouchableOpacityBox';

import {AppTabNavigatorStackParams} from '@/routes/AppTabNavigator';

import {mapScreenToProps} from './utils';

export const AppTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => (
  <Box flexDirection="row">
    {state.routes.map((route, index) => {
      const {options} = descriptors[route.key];

      const tabItem =
        mapScreenToProps[route.name as keyof AppTabNavigatorStackParams];

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate({name: route.name, merge: true});
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <TouchableOpacityBox
          activeOpacity={1}
          alignItems="center"
          accessibilityRole="button"
          accessibilityState={isFocused ? {selected: true} : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={{flex: 1}}>
          <Icon
            color={isFocused ? 'primary' : 'backgroundContrast'}
            variant={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
          />
          <Text
            semiBold
            preset="paragraphCaption"
            color={isFocused ? 'primary' : 'backgroundContrast'}>
            {tabItem.label}
          </Text>
        </TouchableOpacityBox>
      );
    })}
  </Box>
);
