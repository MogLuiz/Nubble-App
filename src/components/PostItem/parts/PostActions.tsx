import React from 'react';

import {Post} from '@domain/Post';

import {Box} from '@components/Box';
import {Text} from '@components/Text';
import {Icon, IIconProps} from '@components/Icon';
import {TouchableOpacityBox} from '@components/TouchableOpacityBox';

type PostActionsProps = Pick<
  Post,
  'reactionCount' | 'commentCount' | 'favoriteCount'
>;

export const PostActions = ({
  reactionCount,
  commentCount,
  favoriteCount,
}: PostActionsProps) => {
  const likePost = () => {
    //TODO: Implement like post
  };

  const navigateToComments = () => {
    //TODO: Implement navigate to comments
  };

  const favoritePost = () => {
    // TODO: Implement favorite post
  };

  return (
    <Box flexDirection="row" mt="s16">
      <PostActionItem
        marked
        onPress={likePost}
        text={reactionCount}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
      />
      <PostActionItem
        marked={false}
        onPress={navigateToComments}
        text={commentCount}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
      />
      <PostActionItem
        marked={false}
        onPress={favoritePost}
        text={favoriteCount}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
      />
    </Box>
  );
};

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  text: number;
  icon: {
    default: IIconProps['variant'];
    marked: IIconProps['variant'];
  };
}

const PostActionItem = ({onPress, icon, marked, text}: ItemProps) => (
  <TouchableOpacityBox
    flexDirection="row"
    alignItems="center"
    mr="s24"
    onPress={onPress}>
    <Icon
      color={marked ? 'market' : undefined}
      variant={marked ? icon.marked : icon.default}
    />
    {text > 0 && (
      <Text preset="paragraphSmall" bold ml="s4">
        {text}
      </Text>
    )}
  </TouchableOpacityBox>
);
