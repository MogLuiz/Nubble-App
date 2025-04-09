import React from 'react';

import {Post} from '@domain/Post';
import {Pressable} from 'react-native';
import {Box} from '@components/Box';
import {Text} from '@components/Text';
import {ProfileAvatar} from '@components/ProfileAvatar';
import {useNavigation} from '@react-navigation/native';

type PostHeaderProps = Pick<Post, 'author'>;

export const PostHeader = ({
  author: {profileURL, userName, id},
}: PostHeaderProps) => {
  const navigation = useNavigation();
  const navigateToProfile = () => {
    navigation.navigate('ProfileScreen', {
      userId: id,
    });
  };

  return (
    <Pressable onPress={navigateToProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={profileURL} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {userName}
        </Text>
      </Box>
    </Pressable>
  );
};
