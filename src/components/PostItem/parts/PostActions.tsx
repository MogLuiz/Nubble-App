import React from 'react';

import {IPost} from '@domain/Post';

import {Box} from '@components/Box';
import {TouchableOpacityBox} from '@components/TouchableOpacityBox';
import {Text} from '@components/Text';
import {Icon, IIconProps} from '@components/Icon';

type PostActionsProps = Pick<
  IPost,
  'reactionCount' | 'commentCount' | 'favoriteCount'
>;

export const PostActions = ({
  reactionCount,
  commentCount,
  favoriteCount,
}: PostActionsProps) => {
  function likePost() {
    //TODO: Implement like post
  }

  function navigateToComments() {
    //TODO: Implement navigate to comments
  }

  function favoritePost() {
    // TODO: Implement favorite post
  }
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        onPress={likePost}
        text={reactionCount}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
      />
      <Item
        marked={false}
        onPress={navigateToComments}
        text={commentCount}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
      />
      <Item
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
function Item({onPress, icon, marked, text}: ItemProps) {
  return (
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
}
