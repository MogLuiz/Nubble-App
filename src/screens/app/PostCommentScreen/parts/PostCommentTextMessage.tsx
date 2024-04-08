import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {TextMessage} from '@components/TextMessage';

import {usePostCommentCreate} from '@domain/PostComment/useCases/usePostCommentCreate';

interface PostCommentTextMessageProps {
  postId: number;
}

export const PostCommentTextMessage = ({
  postId,
}: PostCommentTextMessageProps) => {
  const [comment, setComment] = useState('');
  const {createPostComment} = usePostCommentCreate(postId);

  const onPressSend = async () => {
    await createPostComment(comment);
    setComment('');
    Keyboard.dismiss();
  };

  return (
    <TextMessage
      onPressSend={onPressSend}
      onChangeText={setComment}
      value={comment}
      placeholder="Adicione um comentário"
    />
  );
};
