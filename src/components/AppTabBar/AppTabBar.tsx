import React from 'react';

import {mapScreenToProps} from './utils';

import {$shadowProps} from '@theme';
import {useAppSafeArea} from '@hooks/useAppSafeArea';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Icon} from '@components/Icon';
import {Box, BoxProps} from '@components/Box';
import {ITextProps, Text} from '@components/Text';
import {
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components/TouchableOpacityBox';

import {AppTabNavigatorStackParams} from '@/routes/AppTabNavigator';

export const AppTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const {bottomSpacing} = useAppSafeArea();

  return (
    <Box
      {...$boxWrapper}
      style={[{paddingBottom: bottomSpacing}, $shadowProps]}>
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
            navigation.navigate({
              name: route.name,
              params: route.params,
              merge: true,
            });
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
            {...$itemWrapper}
            accessibilityState={isFocused ? {selected: true} : {}}
            key={route.key}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Icon
              color={isFocused ? 'primary' : 'backgroundContrast'}
              variant={
                isFocused ? tabItem.icon.focused : tabItem.icon.unfocused
              }
            />
            <Text
              {...$label}
              color={isFocused ? 'primary' : 'backgroundContrast'}>
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
};

const $label: ITextProps = {
  semiBold: true,
  marginTop: 's4',
  preset: 'paragraphCaption',
};

const $itemWrapper: TouchableOpacityBoxProps = {
  activeOpacity: 1,
  alignItems: 'center',
  accessibilityRole: 'button',
};

const $boxWrapper: BoxProps = {
  paddingTop: 's12',
  backgroundColor: 'background',
  flexDirection: 'row',
};
