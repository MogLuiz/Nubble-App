import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components/Text';

interface PostCommentBottomProps {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export const PostCommentBottom = ({
  fetchNextPage,
  hasNextPage,
}: PostCommentBottomProps) =>
  hasNextPage && (
    <Pressable onPress={fetchNextPage}>
      <Text color="primary" bold textAlign="center">
        Ver mais
      </Text>
    </Pressable>
  );
