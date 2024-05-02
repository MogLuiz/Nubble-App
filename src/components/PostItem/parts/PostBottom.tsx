import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Post} from '@domain/Post';

import {Box} from '@components/Box';
import {Text} from '@components/Text';

type PostBottomProps = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;

export const PostBottom = ({
  author,
  text,
  commentCount,
  id,
}: PostBottomProps) => {
  const navigation = useNavigation();

  const commentText = getCommentText(commentCount);

  const handleNavigateToPostCommentScreen = () => {
    navigation.navigate('PostCommentScreen', {
      postId: id,
      postAuthorId: author.id,
    });
  };

  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text
          onPress={handleNavigateToPostCommentScreen}
          mt="s8"
          preset="paragraphSmall"
          bold
          color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
};

function getCommentText(commentCount: number): string | null {
  if (!commentCount) {
    return null;
  }

  return commentCount === 1
    ? 'ver comentário'
    : `ver ${commentCount} comentários`;
}
