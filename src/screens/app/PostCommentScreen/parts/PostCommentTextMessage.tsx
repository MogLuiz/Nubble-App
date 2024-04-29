import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {TextMessage} from '@components/TextMessage';

import {usePostCommentCreate} from '@domain/PostComment/useCases/usePostCommentCreate';

interface PostCommentTextMessageProps {
  postId: number;
  onAddComment?: () => void;
}

export const PostCommentTextMessage = ({
  postId,
  onAddComment,
}: PostCommentTextMessageProps) => {
  const [comment, setComment] = useState('');
  const {createPostComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      setComment('');
      Keyboard.dismiss();
      onAddComment?.();
    },
  });

  return (
    <TextMessage
      onPressSend={createPostComment}
      onChangeText={setComment}
      value={comment}
      placeholder="Adicione um comentário"
    />
  );
};
